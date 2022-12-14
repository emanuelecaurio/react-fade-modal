import * as React from "react"
import {createContext, ReactNode, useContext, useState} from "react";
import Modal from "./Modal";
import {ModalConfig, ModalContextValues} from "./interfaces";

const ModalContext = createContext<ModalContextValues>(
    {
        showModal: () => undefined
    }
)
export const useModalContext = () => useContext(ModalContext)

export function ModalProvider({children}: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalConfig, setModalConfig] = useState<ModalConfig>({})

    const showModal = (newModalConfig: ModalConfig): void => {
        setIsOpen(true)
        setModalConfig({...newModalConfig})
    }
    return (
        <ModalContext.Provider value={{
            showModal
        }}>
            {isOpen && <Modal setIsOpen={setIsOpen} {...modalConfig}/>}
            {children}
        </ModalContext.Provider>
    )
}