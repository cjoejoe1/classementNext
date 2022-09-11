import React from 'react'
import Image from 'next/image'
import template from '../../images/template-website.png'

const Template = () => {
  return (

<Image src={template} priority={true}/>
  )
}

export default Template