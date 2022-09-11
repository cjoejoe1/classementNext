import React from 'react'
import Image from 'next/image'
import template from '../../images/template-website.png'

const Template = () => {
  return (

<Image src={template} placeholder="blur" priority={true}/>
  )
}

export default Template