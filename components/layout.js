
import React, {useEffect} from "react"
import Head from 'next/head'
import Header from "./Header"
import Start from "./Blocks/Start"
import Footer from "./footer"
import Aos from 'aos'
import "aos/dist/aos.css"


const Layout = ({ children, path }) => {

  

  useEffect(()=> {
    Aos.init({});
 }, [])

  return (
    <>
      <Head>
  
          <link rel="canonical" />
        </Head>
      <Header siteTitle={`Title`} path={path}/>

    
          <main style={{marginTop: -98}}>{children}</main>
     <Start/>
    <Footer/>
 
    </>
  )
}

export default Layout
