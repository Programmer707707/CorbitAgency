import React from 'react'
import Accordion from '@/components/Accordion/Accordion';
const FAQ = () => {
  return (
    <section className='content-center bg-lightGray py-8 md:py-16'>
        <div className='container mx-auto px-4 max-w-6xl'>
            
            <div className='text-center mb-8'>
                <h2 className='mb-4'>FAQ</h2>
                <p>Here are some common questions and answers about our services</p>
            </div>

            <Accordion questions={questions} />
        </div>
    </section>
  )
}

const questions = [
    {
        question: 'How much will tbe the website cost',
        answer: "The cost varies depending on the complexity and features required. We will provide a detailed quote after discussing your specific needs."
    },
    {
        question: 'How long will it take to create the website?',
        answer: 'It usually takes 2-3 weeks to create a website. More complex projects may take longer.'
    },
    {
        question: 'Will the website be optimized for mobile devices?',
        answer: 'Yes, all of our websites are designed and optimized to work well on mobile devices, tablets, and desktops.',
    },
    {
        question: 'Will I be able to update the website content myself?',
        answer: 'Yes, we will install a user-friendly content management system (CMS) that allows you to easily update text and images.',
    },
    {
        question: 'Will my website be optimized for search engines (SEO)?',
        answer: 'We place special emphasis on SEO optimization during the development process, ensuring your website is easily found by search engines.',
    },
    {
        question: 'What does the website maintenance package include?',
        answer: 'Our maintenance package typically includes regular updates, security checks, backups, and minor content changes.',
    }

]

export default FAQ