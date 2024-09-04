'use client'
import Button from '@/components/Button';
import React from 'react'
import { useFormState } from 'react-dom';
import { sendMessage } from '@/app/actions';

const  ContactUsForm= () => {
const [state, formAction] = useFormState(sendMessage, {
    message: "",
})

  return (
    <form action={formAction} className='p-6 bg-white shadow-sm text-black space-y-4 rounded-lg'>
        <div className='space-y-2'>
            <p className='font-extrabold'>
                Name
            </p>
            <input placeholder='John Doe' type="text" name='name' required className='w-full p-3 bg-lightGray rounded-lg' />
        </div>

        <div className='space-y-2'>
            <p className='font-extrabold'>
                Company
            </p>
            <input placeholder='John Doe' type="text" name='company' required className='w-full p-3 bg-lightGray rounded-lg' />
        </div>

        <div className='space-y-2'>
            <p className='font-extrabold'>
                Email
            </p>
            <input placeholder='John Doe' type="email" name='email' required className='w-full p-3 bg-lightGray rounded-lg' />
        </div>

        <div className='space-y-2'>
            <p className='font-extrabold'>
                Message
            </p>
            <textarea placeholder='John Doe' name='message' required className='w-full p-3 bg-lightGray rounded-lg' />
        </div>

        {state.message && (<p aria-live='polite' className='not-sr-only'>{state.message}</p>)}

        <div className='flex justify-center'>
            <button className='bg-Blue hover:bg-blue-700 w-full md:w-auto text-white px-4 py-4 rounded font-black text-lg disabled:bg-gray-300 undefined'>Contact Us</button>
        </div>
    </form>
    
  )
}

export default ContactUsForm;