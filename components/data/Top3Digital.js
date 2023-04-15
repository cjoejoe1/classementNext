import React from 'react'
import { FaArrowRight, FaTrophy} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap-grid.css"
import {Row, Col} from "react-bootstrap"
import Link from 'next/link'
import clickup from '../../images/logos/clickup.png'
import wrike from '../../images/logos/wrike.png'
import asana from '../../images/logos/asana.png'
import celoxis from '../../images/logos/celoxis.png'
import trello from '../../images/logos/trello.png'
import monday from '../../images/logos/monday.png'
import site123 from '../../images/logos/site123.png'
import zyro from '../../images/logos/zyro.png'
import jimdo from '../../images/logos/jimdo.png'
import jasper from '../../images/logos/jasper.png'
import copyai from '../../images/logos/copyai.png'
import hypotenuse from '../../images/logos/hypotenuse.png'
import hostinger from '../../images/logos/hostinger.png'
import coorpacademy from '../../images/logos/coorpacademy.png'
import edflex from '../../images/logos/edflex.png'
import linkedinlearning from '../../images/logos/linkedinlearning.png'
import crossknowledge from '../../images/logos/crossknowledge.png'
import kokoroe from '../../images/logos/kokoroe.png'
import skillsoft from '../../images/logos/skillsoft.png'

import Image from 'next/image'

function HebergementPodcast({data}) {
 


const renderBox = (item, index) => {


    const getLogo = () => {
      if(item.name === 'ClickUp') return clickup
      else if (item.name === 'Wrike') return wrike
      else if (item.name === 'Asana') return asana
      else if (item.name === 'Celoxis') return celoxis
      else if (item.name === 'Trello') return trello
      else if (item.name === 'Monday') return monday
      else if (item.name === 'Zyro') return zyro
      else if (item.name === 'Jimdo') return jimdo
      else if (item.name === 'Site123') return site123
      else if (item.name === 'Jasper') return jasper
      else if (item.name === 'CopyAI') return copyai
      else if (item.name === 'Hostinger') return hostinger
      else if (item.name === 'Hypotenuse') return hypotenuse
      else if (item.name === 'Coorpacademy') return coorpacademy
      else if (item.name === 'Edflex') return edflex
      else if (item.name === 'Linkedin Learning') return linkedinlearning
      else if (item.name === 'Crossknowledge') return crossknowledge
      else if (item.name === 'Kokoroe') return kokoroe
      else if (item.name === 'Skillsoft') return skillsoft




    }


  return (
    <>
    {index === 0 ? <><Col lg={4} >
      <Link href={`/go/?go=${item.name}&url=${item.go}`} id='textOnHover' passHref>
        <a id='tabLink' target='_blank' rel="noreferrer nofollow">
        <div className="top1New" style={{background: 'white', borderRadius: 5}} id='cardOnHoverTop1'>
    <div style={{marginTop: 0, background: 'white', borderRadius: 5}}>
   <div style={{height: 20, background: '#008600', width: 118, marginBottom: -25, marginLeft: 0, marginTop: 5, color: 'white', fontSize: 14, paddingLeft: 5, fontWeight: 700, paddingLeft: 7}}>Recommandé</div>

        <div style={{ minHeight: 150, borderRadius: 5, display: 'flex', paddingTop: 10, paddingLeft: 10, paddingRight: 30, justifyContent: 'space-between'}}  >
                   
            <div style={{marginLeft: 10, marginTop: 15}}>
              <div style={{maxWidth: 158}}>
                <Image src={getLogo()}  width={256} height={200} alt=""/>
              </div>
            </div>
            <div>
              <div style={{marginTop: 40}}>
                <p style={{fontFamily: 'Montserrat', fontSize: 15, fontWeight: 700, marginLeft: 2}}>Exceptionnel <span style={{background: '#f00057', color: 'white', paddingLeft: 4, paddingRight: 4, borderRadius: 4, fontWeight: 700}}>{item.score}</span></p>
              </div>

              <div style={{ paddingBottom: 10, marginLeft: 40, marginTop: 30}}>
                  <p id='jemelance' style={{fontSize: 15, color: '#f00057', marginTop: -3, fontWeight: 700}}>Voir l'offre <FaArrowRight /></p>
              </div>
            </div>

        </div>

        


        </div>
        
        </div></a>
        </Link>
        </Col></> : <Col lg={4} >
      <Link href={`/go/?go=${item.name}&url=${item.go}`} id='textOnHover' passHref>
        <a id='tabLink' target='_blank' rel="noreferrer nofollow">

    <div style={{marginTop: 0, background: 'white', borderRadius: 5}}  id='cardOnHoverTop3'>

            <div style={{ minHeight: 175, borderRadius: 5, display: 'flex', paddingTop: 10, paddingLeft: 10, paddingRight: 30, justifyContent: 'space-between', marginBottom : -40}} >
                   
                   <div style={{marginLeft: 10, marginTop: -10}}>
                    <div style={{maxWidth: 158}}>
                      <Image src={getLogo()}  width={256} height={200} alt=""/>
                    </div>
                    </div>
<div>
                    <div style={{marginTop: 20}}>
              <p style={{fontFamily: 'Montserrat', fontSize: 15, fontWeight: 700, marginLeft: 30}}>Excellent <span style={{background: '#f00057', color: 'white', paddingLeft: 4, paddingRight: 4, borderRadius: 4, fontWeight: 700}}>{item.score}</span></p>
            </div>

           
            <div style={{ paddingBottom: 10, marginLeft: 40, marginTop: 30}}>
              {/* <p style={{fontSize: 13}}>{<span style={{fontStyle: 'italic'}}>"{item.quote}"</span> || ''}</p> */}
              <p id='jemelance' style={{fontSize: 15, color: '#f00057', marginTop: -3}}>Voir l'offre <FaArrowRight /></p>
            </div>
            </div>
             </div>

        </div></a>
        </Link>
        </Col>}
    </>
  )


}

  return (

    <>

<Row style={{display: 'flex', maxWidth: 1140, margin: 'auto', justifyContent: 'space-evenly', marginTop: 0, marginLeft: 0}}>

  {data && data.slice(0,3).map(renderBox)}

 
</Row>
  
    </>
  )
}

export default HebergementPodcast
