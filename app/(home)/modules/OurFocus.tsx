import React from 'react'
import BrandingImg from '@/images/branding.png';
import SpeedometerImg from '@/images/speedometer.png';
import SEOImg from '@/images/seo.png';
import SupportImg from '@/images/support.png';
import StrategyImg from '@/images/strategy.png';
import CodeImg from '@/images/code.png'; 
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';

const OurFocus = () => {
  return (
    <section className='bg-lightGray py-8 md:py-16'>
        <div className='container mx-auto px-4 max-w-6xl'>
            <div className='max-w-6xl  text-center mb-8 mx-auto'>
                <h2 className='mb-4'>
                    Our <span className='text-Blue'>Focus</span>
                </h2>
                <p>We focus on building websites that help you achieve your goals</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {features.map((features, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg shadow-sm'>
                        <div className='inline-block p-4 bg-gradient-to-r from-Blue to-[#50e2d3] rounded-lg'>
                            <Image src={features.image} alt='photo' width={34} height={"auto"} />
                        </div>

                        <h3 className='my-4'>{features.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: features.description}} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-6'>
                <Link href="#contact"><Button/></Link>
            </div>
        </div>
    </section>
  )
}


const features = [
    {
        image: BrandingImg,
        title: 'Unique Design',
        description: 'We ensure that the website is not only beautiful but also user-friendly. Our websites are designed to work well on all devices - from desktops to smartphones.',
    },
    {
        image: SpeedometerImg,
        title: 'Guaranteed website performance',
        description: 'Website performance is one of the main SEO metrics. This is because a fast website ensures a better user experience.',
    },
    {
        image: SEOImg,
        title: 'Maximum SEO optimization',
        description: 'SEO optimization is one of the most important things if you want your website to be found on Google search.',
    },
    {
        image: SupportImg,
        title: 'Maintenance',
        description: 'Our maintenance package typically includes regular updates, security checks, backups, and minor content changes.',
    },
    {
        image: StrategyImg,
        title: 'Strategy',
        description: 'This approach helps us create virtual businesses that achieve goals. To achieve success, you first need a strategy.',
    },
    {
        image: CodeImg,
        title: 'No Wordpress, Webflow, or Wix',
        description: "And that's not all - we also ensure that your website is maximally SEO optimized, and you will avoid not only monthly but also often hidden fees of these platform.",
    },
]

export default OurFocus