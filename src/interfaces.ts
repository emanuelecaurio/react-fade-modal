import {CSSProperties, ReactElement, ReactNode} from "react";

export interface ModalConfig {
    transitionDurationInMs?: number,
    title?: string,
    children?: ReactNode,
    closeOnClickOutside?: boolean,
    containerCss?: string,
    modalCss?: string,
    modalStyle?: CSSProperties,
    titleCss?: string,
    contentCss?: string,
    closeIconCss?: string,
    showCloseIcon?: boolean,
    customCloseIcon?: ReactElement
}

export interface ModalProps extends ModalConfig {
    setIsOpen: Function
}

export interface ModalContextValues {
    showModal: Function
}