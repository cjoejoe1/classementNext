
import Image from 'next/image'

export const renderSingleImage = (localImages, img, style, alt, layout, width, height, placeholder) => {

    // console.log('localImages', localImages)
    // console.log('img', img)
    // console.log('style', style)
    // console.log('alt', alt)
// console.log('imagewidth', width)
// console.log('imageheight', height)

    // if(!localImages) {
    //     return <img src={imageName} alt="" style={{width: '100%', height: '100%'}} id={style}/>
    // }
    
    const isClientRendering = false
    // const isClientRendering = typeof localImages[0] === 'string'
    const imageName = localImages.filter(localImage => localImage.includes(img) )[0]
    // const imageBlock = isClientRendering ? '' : getImage(imageName)
    
    // console.log('imageName is', imageName)
    return (
        <Image src={imageName} layout={layout} width={width !== '' ? width || 200 : null} height={height !== '' ? height || 50 : null} alt={alt} id={style} placeholder={placeholder}/>
        // isClientRendering
        // ? <img src={imageName} alt="" style={{width: '100%', height: '100%'}} id={style}/> 
        // : <Image src={imageName} width='300px' height='200px' alt={alt} id={style}/>
    )
}

