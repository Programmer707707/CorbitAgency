import React from 'react'
import Image, { StaticImageData } from 'next/image';
const ImageComp = ({img}: {img:StaticImageData})  => {
  return (
    <Image 
      src={img} 
      alt={'img'} 
      sizes='100vw' 
      width={0} height={0} 
      style={{width: '100%', height: 'auto'}} />
    
  )
}

export default ImageComp;