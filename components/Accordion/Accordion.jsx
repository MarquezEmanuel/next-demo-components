import AccordionBody from "./Body";
import AccordionHeader from "./Header";
import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/outline'

import { useState } from "react";

const Accordion = ({ id, titulo, descripcion, children }) => {

    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div className='flex flex-col mt-2 border-2 border-blue-800 bg-blue-800 rounded-md'>
            <AccordionHeader handleClick={handleClick} id={id} titulo={titulo} descripcion={descripcion} >
                <Link href='/boton'>
                    <a><TrashIcon width='20' height='20' /></a>
                </Link>
                <Link href='/boton'>
                    <a><TrashIcon width='20' height='20' /></a>
                </Link>
            </AccordionHeader>
            <AccordionBody visible={visible}>{children}</AccordionBody>
        </div>);
}

export default Accordion;