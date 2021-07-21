import React, {useState} from 'react';
import ContactPage from '../components/ContactPage';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


const Contact = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ContactPage />
        </>
    )
}

export default Contact
