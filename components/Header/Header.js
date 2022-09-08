import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Menu from './Menu'


const SiteHeader = styled.header`
  padding: 10px 0 10px 0;
  background-color: #0000004a;

  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;

    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      position: fixed !important;
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: #223151;
    }

 `


const Header = (props) => {


  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [backgroundC, setBackgroundC] = useState('')

  const background = () => {
    if(!props.path) return '#0000004a'
    else return '#223151'
  }

  const backgroundCSS = () => {
    if(!props.path) return 'backgroundUp'
    else if(!props.path && showReveal ===  true) return 'backgroundMiddle'
    else return 'backgroundDown'
  }

  const url = (id) => {
    return props.pages.filter(page => page.id === id)
  }


  // const selectedPages = props.header.menu.map(menuItem => url(menuItem.id)[0])



  // const menuItems = selectedPages.map(page => {
    
  //   const menuLabel = props.header.menu.filter(menuItem => menuItem.id === page.id)

  //   return {
  //     url: `${page.aUri}/`,
  //     name: `${page.aUri}/`,
  //     label: menuLabel[0].label || page.content.h1}
  // })

  const menuItems = [
    {
      url: 'how-it-works/',
      name: 'how-it-works/',
      label: 'How it works',
    },
    {
      url: 'for-who/',
      name: 'for-who/',
      label: 'For who?',
    },
    {
      url: 'pricing/',
      name: 'pricing/',
      label: 'Pricing',
    }

  ]




  useScrollPosition(({ prevPos, currPos }) => {
 
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  const logo = () => {
    // if(props.design.logo === 'text'){
    //   return 'text'
    // }
    // else {
      if(props.logos.includes(`${props.contact.subDomain}%2Flogo-white`)) return `${props.contact.subDomain}%2Flogo-white`
      else return `${props.contact.subDomain}%2Flogo`
    // }

  }




  return (
    <>
      <SiteHeader className={`sticky-header ${showScrolling ? "scrolling" : ""} ${ showReveal ? "reveal-header" : "" }`} dark={0}
        style={{paddingTop: 0, paddingBottom: 0, position: 'sticky', top: 0}}

        // bgDown={'#223151'} bgDefault={'blue'}
      >
        

      
        <Menu path={props.path} header={props.header} design={props.design}  bg={'red'} burgerLine={'white'} burgerBorder={'white'} buttonBorder={'white'}  linkColor={'white'} headerLink={'white'} headerCta={'Start Now'} menuItems={menuItems} showReveal={showReveal} logo={'stimply-logo-white'} />
        {/* </div> */}
      </SiteHeader>
      
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} headerCta={'start now'} />
      </Offcanvas>
  
    </>
  );
};
export default Header;

