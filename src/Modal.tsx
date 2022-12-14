import * as React from "react"
import {ReactComponent as XmarkIcon} from "./xmark-solid.svg";
import {cloneElement, useEffect, useState} from "react";
import {ModalProps} from "./interfaces";
import css from "./ReactFadeModal.module.css"

export default function Modal(
    {
        setIsOpen,
        transitionDurationInMs = 200,
        title = '',
        children = undefined,
        closeOnClickOutside = true,
        containerCss = '',
        modalCss = '',
        modalStyle = {},
        titleCss = '',
        contentCss = '',
        closeIconCss = '',
        showCloseIcon = true,
        customCloseIcon = undefined
    }: ModalProps) {
    const [opacity, setOpacity] = useState(0)
    const [isClickOutside, setIsClickOutside] = useState(false)
    const [isClickInside, setIsClickInside] = useState(false)
    const onClose = () => {
        setOpacity(0)
        setTimeout(() => {
            setIsOpen(false)
        }, transitionDurationInMs)
    }
    const [customCloseComponent] = useState(
        customCloseIcon && cloneElement(customCloseIcon, {onClick: onClose})
    )

    useEffect(() => {
        setOpacity(1)
    }, [])

    useEffect(() => {
        if (!closeOnClickOutside)
            return
        if (isClickOutside && !isClickInside)
            onClose()
        return () => {
            setIsClickOutside(false);
            setIsClickInside(false)
        }
        // omit onClose: safe omit function props.
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [isClickOutside, isClickInside, closeOnClickOutside])

    return (
        <div
            onClick={() => {
                setIsClickOutside(true)
            }}
            className={`${css.container} ${containerCss}`}
            style={{transitionDuration: `${transitionDurationInMs}ms`, opacity}}>
            <div
                style={modalStyle}
                onClick={() => {
                    setIsClickInside(true)
                }}
                className={`${css.modal} ${modalCss}`}>
                <div className={css.titleSection}>
                    <div className={`${css.title} ${titleCss}`}>
                        {title}
                    </div>
                    {showCloseIcon && (
                        customCloseIcon
                            ? customCloseComponent
                            : <XmarkIcon
                                className={`${css.closeIcon} ${closeIconCss}`}
                                onClick={onClose}
                            />
                    )}
                </div>
                <div className={`${css.content} ${contentCss}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}