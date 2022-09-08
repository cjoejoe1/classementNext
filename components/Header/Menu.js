import React, {useContext} from 'react'
import {Container, Button} from 'react-bootstrap'
import { device } from "../../utils";
import styled from "styled-components";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Image from 'next/image'
import logoBlack from '../../images/stimply-logo-white.png'
import phone from "../../images/phone.png";
import { useRouter } from 'next/router'

const Menu = (props) => {
  const router = useRouter()

  const gContext = useContext(GlobalContext);

  const background = () => {
    if (router.pathname && router.pathname !== '/') return '#223151'
    // else return 'red'
  }

  const linkColor = () => {
    if(props.design.theme === 'dark' || props.design.theme === 'transparent') return 'white'
    else return 'black'
  }

  const logoMaker = () => {
    if(props.design.logo === 'text'){
      return (
        <div style={{display: 'flex'}}>
           <div style={{display: 'flex',  justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
          <img src={logoBlack} alt="" style={{height: 50}}/>
          </div>
        <div style={{justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}} id='mobileLogo'>
          <div style={{borderLeft: '1px solid black', height: 40, marginLeft: 10}}></div>
        
        </div>
        <div style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}  id='mobileLogo'>
          <span style={{fontSize: 22, fontWeight: 100, fontFamily: 'Roboto', color: 'black', marginLeft: 20, textTransform: 'uppercase'}}>{props.activity}</span>
        </div>
        </div>
      )
    } else {
      return (
        <h1>Logo</h1>
        // renderSingleImage(props.localImages, props.logo, 'defaultLogo', props.contactSubDomain)
      )
      
    }
  }

  return (
    <DivStyle fluid style={{backgroundColor: background()}}>
    <Container id='menu' style={{maxWidth: 1280, paddingtop:3}}>
      <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light" id='menuWidth' >

    <div className="brand-logo">
        <Link href={'/'} style={{textDecoration: 'none'}}>

                  <Image src={logoBlack} alt="logo" id='smallLogo' width='160px' height='51px' style={{cursor: 'pointer'}}/>
         
        </Link>
  
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav ml-lg-auto mr-3" style={{paddingBottom: 0}}>
            <MenuStyle
              className="navbar-nav d-none d-lg-flex"
              dark={0}
      
            >
              {props.menuItems.map(
                (
                  { label, isExternal = false, url, items, ...rest },
                  index
                ) => {
                  // const hasSubItems = Array.isArray(items);
                  return (
                    <React.Fragment key={url + index}>
                      {
                      
                       (
                        <li className="nav-item" {...rest}>
                          {isExternal ? (
                            <a
                              className="nav-link"
                              href={`${url}`}
                              style={{color: 'white', fontSize: 16, fontWeight: 600, lineHeight: 24, paddingTop: 18, paddingLeft: 18, paddingRight: 18 }}
                              rel="noopener noreferrer"
                            >
                              {label}
                            </a>
                          ) : (

                            <Link
                              className="nav-link"
                              href={`/${url}`}
                              role="button"
                              aria-expanded="false"
                              passHref
                            >
                              <a style={{color: 'white', fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>{label}</a>
                            </Link>
                          )}
                        </li>
                      )
                      
                      
                      }
                    </React.Fragment>
                  );
                }
              )}
            </MenuStyle>
          </div>
        </div>
        <div className="header-btns ms-auto ms-lg-0 d-none d-md-block" style={{marginRight: 10}}>
                <div style={{textAlign: 'right', fontWeight: 300, fontSize:16, marginTop: 14, marginRight: 0, marginBottom: -10, color: 'white'}}  id='notMobile'>Mon-Fri (9am - 6pm)</div>
                <div style={{textAlign: 'right', fontWeight: 700, fontSize:31, marginTop: 0, marginBottom: 0, marginRight: 0, color: 'white'}}  id='notMobile'><Image src={phone} alt="Stimply telephone number" width='31px' height='31px'/> 0203 287 1064</div>
            </div>
{/* 
          <ButtonStyle design={props.design} className="header-btns ml-auto ml-lg-0 d-none d-md-block">
            <Link to={props.headerLink || props.leadUrl} >
              <Button type="submit" 
              id={`${props.showReveal ? "headerButtonDown" : "headerButtonUp"}`}>
                <FontAwesomeIcon icon={faPhone}  id={`${props.showReveal ? "phoneDown" : "phoneUp"}`}/> {<span>'Start Now'</span>} </Button>
            </Link>
          </ButtonStyle>
      
       */}
    

        <ToggleButton
          className={`navbar-toggler btn-close-off-canvas ml-3 ${
            gContext.visibleOffCanvas ? "collapsed" : ""
          }`}
          type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation" onClick={gContext.toggleOffCanvas} dark={0} id='burger' style={{height: 40, borderColor: 'transparent'}}
        >
          
          <i className="icon icon-menu-34 icon-burger d-block" style={{color: 'white', fontSize: 30, fontWeight: 800}}></i>
        </ToggleButton>
      </nav>
    </Container>
    </DivStyle>
  )
}

export default Menu

const DivStyle = styled.div`
  padding-top: 5px;
`

const ButtonStyle = styled.div`
#headerButtonUp{
  height: 40px;
  font-family: Montserrat;
  background-color: transparent;
  border-color: white;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  color: white;
  margin-top: 0px;
}

#headerButtonDown{
  height: 40px;
  font-family: Montserrat;
  background-color: red};
  border-color: pink;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  color: white;
  margin-top: 0px;
}
#headerButtonUp:hover{
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}

#headerButtonDown:hover{
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}

#headerButtonUpBlack{
  height: 40px;
  font-family: Montserrat;
  background-color: transparent;
  border-color: black;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  color: black;
  margin-top: 0px;
}

#headerButtonDownBlack{
  height: 40px;
  font-family: Montserrat;
  background-color: red;
  border-color: pink;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  color: white;
  margin-top: 0px;
}
#headerButtonUpBlack:hover{
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}

#headerButtonDownBlack:hover{
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}

#phoneUp{
  color: white;
}

#phoneDown{
  color: white;
}

#phoneUpBlack{
  color: black;
}

#phoneDownBlack{
  color: black;
}

`

const MenuStyle = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
      @media ${device.lg} {
        color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding-top: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }
      &:hover {
        color: #fba039 !important;
     
      }
    }
    > a {
      @media ${device.lg} {
        color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding-top: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
        font-family: Montserrat;
      }
      &:hover {
        color: #fba039 !important;
     
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;



const ToggleButton = styled.button`
  color: ${({ dark, theme }) =>
    dark ? 'white' : 'white'}!important;
  border-color: ${({ dark, theme }) =>
    dark ? 'transparent' : 'transparent'}!important;

`;