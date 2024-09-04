import React from 'react'
import FLIXX from "@/images/flix.png";
import ImageComp from '@/components/ImageComp';
import Button from '@/components/Button';
const OurWork = () => {
  return (
    <section className='bg-dark py-8 md:py-16 text-white '>
        <div className='container mx-auto px-4'>
            <h2 className='text-center mb-8'>Our <span className='text-Blue text-center mb-8'>work</span></h2>

            <div className='grid md:grid-cols-[70%] gap-4 md:gap-12 justify-center'>
                {projects.map((project, index)=>(
                    <div key={project.title} className='cursor-pointer'>
                        <div className='mb-8'>
                            <h3 className='mb-3'>{project.title}</h3>
                            <a href={project.link}><ImageComp img={FLIXX} /></a>
                        </div>

                        <div>
                            <h4 className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit tempora voluptatibus at adipisci placeat rem, sequi molestiae tenetur expedita reprehenderit consequuntur quas? Molestiae doloremque architecto placeat cupiditate maxime dolor soluta?</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

const projects = [
    {
        title: 'FLIXX',
        image: FLIXX,
        link: 'https://regal-twilight-dcd467.netlify.app',
    }
]

export default OurWork