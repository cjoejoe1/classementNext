
import React, {useEffect, useState} from "react"
import Head from 'next/head'
import Header from "./Header"
import Start from "./Blocks/Start"
import Footer from "./footer"
import Aos from 'aos'
import "aos/dist/aos.css"


const Layout = ({ children, path, email, category, url, type, page, target }) => {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');


  useEffect(()=> {
    Aos.init({});
 }, [])

  return (
    <>
      <Head>
  
          <link rel="canonical" />
        </Head>
      <Header siteTitle={`Title`} page={page} path={path} email={email} category={category} url={url} type={type}
        checked={checked} setChecked={setChecked} radioValue={radioValue} setRadioValue={setRadioValue}
        target={target}
      />

          <main style={{marginTop: -98}}>{children}</main>
     <Start path={path}/>
    <Footer/>
 
    </>
  )
}

export default Layout
