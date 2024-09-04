'use client';
import React from "react";
import {SlArrowDown, SlArrowUp} from 'react-icons/sl';

const AccordionItem = ({question, answer} : {question:string; answer: string;}) => {
const [isOpen, setIsOpen] = React.useState(false);

const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState)
} 

  return (
    <div className="p-4 bg-white shadow-sm rounded-lg cursor-pointer m-auto w-[70%]" onClick={toggleIsOpen}>
        <div className="flex justify-between items-center">
            <h5 className="hover:text-Blue">{question}</h5>
            {isOpen ? <SlArrowUp className="text-Blue" /> : <SlArrowDown className="text-Blue" />}
        </div>

        {isOpen && <p className="text-gray-600 mt-2 p-6">{answer}</p>}

    </div>
  )
}

export default AccordionItem