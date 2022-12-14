import {useState} from "react";
import {Modal, ModalProvider, useModalContext} from "./lib";

const items = ["a", "b", "c"]

const Button = ({children, onClick}: { children: any, onClick: any }) => (
    <button onClick={onClick} style={{padding: 10}}>{children}</button>
)

const Panel = () => {
    const {showModal} = useModalContext()
    return <p>
        {items.map(item =>
            <Button onClick={() => {
                // you can pass either every prop of Modal or just some of it as object properties through this function.
                showModal({
                    title: 'Custom title',
                    children: <div>You can pass any component. This is the Item {item}</div>,
                })
            }}>
                item {item}
            </Button>)}
    </p>
}

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    return (
        <div style={{textAlign: 'center'}}>
            <h1>React Fade Modal Demo</h1>
            <p>
                <div>Basic example</div>
                <Button onClick={() => setIsOpen(true)}>click to open modal</Button>
                {isOpen &&
                    <Modal
                        title={"Title"}
                        setIsOpen={setIsOpen}>
                        <div style={{textAlign: 'left'}}>
                            <p>this is the content. You can pass anything you want inside it.</p>
                            <div>This modal is responsive by default. You can resize browser to test it</div>
                        </div>
                    </Modal>
                }
            </p>
            <br/>
            <p>
                <div>Example using ModalProvider.</div>
                <div>Use the ModalProvider if you have nested components.</div>
                <div>You can put the ModalProvider as your first component into App.js render function,
                    so the modal will be on top of the DOM.
                </div>
                <ModalProvider>
                    <Panel/>
                </ModalProvider>
            </p>
            <br/>
            <p>
                <div>Custom modal with your CSS.</div>
                <div>You don't have to worry about css conflicts.</div>
                <div>You can pass any css class you want and will get the most priority, so you can override the current
                    css properties
                </div>
                <Button onClick={() => setIsOpen2(true)}>click to open modal</Button>
                {isOpen2 &&
                    <Modal
                        title={"Title"}
                        setIsOpen={setIsOpen2}
                        containerCss={"containerExample"}
                        modalCss={"modalExample"}>
                        <div style={{textAlign: 'left'}}>
                            example
                        </div>
                    </Modal>
                }
            </p>
            <br/>

            <p>
                <div>Arbitrary change Modal size through CSS</div>
                <Button onClick={() => setIsOpen3(true)}>click to open modal</Button>
                {isOpen3 &&
                    <Modal
                        title={"Title"}
                        setIsOpen={setIsOpen3}
                        modalCss={"fullPageModal"}>
                        <div style={{textAlign: 'left'}}>
                            example
                        </div>
                    </Modal>
                }
            </p>
        </div>
    );
}

export default App;
