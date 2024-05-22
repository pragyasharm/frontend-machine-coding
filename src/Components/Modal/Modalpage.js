import { useState } from "react"
import ModalContent from "./ModalContent"

const Modalpage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log("button clicked")
    }

    return(
        <div>
            <button className="border border-black-700 p-2 m-2" onClick={toggleModal}>Open Modal</button>
            { isOpen && <ModalContent toggleModal={toggleModal} /> }
        </div>
    )
}
export default Modalpage