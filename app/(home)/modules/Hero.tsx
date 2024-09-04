import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import MockUp from "@/images/mockup.png";
import ImageComp from '@/components/ImageComp';
import Logo from "@/images/logo.png";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='bg-dark py-12 text-white'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='order-2 mb-5 md:order-1'>
                    <h1 className='mb-2 mt-10'>
                        We build  <span className='text-Blue'> Professional </span> websites
                    </h1>
                    <p className='text-xl mb-4'>
                        <strong>Lorem ipsum dolor sit</strong> amet consectetur adipisicing elit. Eaque possimus exercitationem, fugit sapiente itaque fugiat, vero nisi quibusdam dolorem alias dolor. Reiciendis accusantium quidem facilis qui iusto cum, nihil impedit.
                    </p>
                    <Link href="#contact"><Button/></Link>
                </div>

                <div className='order-1 md:order-2'>
                    <ImageComp img={MockUp} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero