import React, {useMemo} from 'react'
import data from './data.json'
import "bootstrap/dist/css/bootstrap-grid.css"
import {Container, Button} from 'react-bootstrap'
import coorpacademy from '../../../images/logos/coorpacademy.png'
import edflex from '../../../images/logos/edflex.png'
import linkedinlearning from '../../../images/logos/linkedinlearning.png'
import crossknowledge from '../../../images/logos/crossknowledge.png'
import kokoroe from '../../../images/logos/kokoroe.png'
import skillsoft from '../../../images/logos/skillsoft.png'
import Link from 'next/link'
import Image from 'next/image'
import ReactStars from "react-rating-stars-component";

function HebergementPodcast(props) {

  const fiveStars = {size: 24,value: 5,color: "rgb(33, 37, 41)",activeColor: "#ffc107",edit: false};

  const fourStars = {size: 24,value: 4,color: "rgb(33, 37, 41)",activeColor: "#ffc107",edit: false};

  const threeStars = {size: 24,value: 3,color: "rgb(33, 37, 41)",activeColor: "#ffc107",edit: false};




const renderRowMob = (item, index) => {

  const getStars = () => {
    if(item.stars === 5) return <ReactStars {...fiveStars} />
    else if(item.stars === 4) return <ReactStars {...fourStars} />
    else if(item.stars === 3) return <ReactStars {...threeStars} />
  }

  const getLogo = () => {
    if(item.name === 'Coorpacademy') return coorpacademy
    else if (item.name === 'Edflex') return edflex
    else if (item.name === 'Linkedin Learning') return linkedinlearning
    else if (item.name === 'Crossknowledge') return crossknowledge
    else if (item.name === 'Kokoroe') return kokoroe
    else if (item.name === 'Skillsoft') return skillsoft
  }

  return (
    <>
   
{/* Not on desktop */}
        <div className='scoreRowMob' style={{marginBottom :20, background: 'white'}}>
      <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'>
    
      <div style={{padding: 30}}>
        
    
            <div>
              <div style={{display: 'flex', marginTop: -32}}>
              <div style={{marginTop: 4}} ><span style={{background: 'pink', paddingLeft: 15, paddingRight: 15, paddingBottom: 3, paddingTop: 4, color: 'rgb(229, 35, 79)', fontWeight: 700}}>{index +1}</span></div>
              {item.feature ? <div style={{background: '#dc3545', borderBottomRightRadius: 5, marginTop: 2}}><span style={{color: 'white', fontWeight: 700, paddingLeft: 10, paddingRight: 10, fontSize: 14}}>PLUS POPULAIRE</span></div>: null}
              </div>
              <div style={{maxWidth: 200, margin: 'auto', marginTop: 30}}>
              <Image src={getLogo()} width={256} height={207} alt="" />
              </div>
            </div>

         
   
            <div style={{textAlign: 'center'}}>

              <div style={{display: 'flex', justifyContent:'center', maxWidth: 200, margin: 'auto'}}>
                {getStars()} <span style={{fontSize: 24, marginLeft: 10, fontWeight: 700, color: 'black'}}>{item.score}</span>
              </div>

              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'><Button variant='danger' style={{width: 200, marginTop: 20, color: 'white', fontWeight: 700}}>Voir l'offre'</Button></a>
            
              <div>
                <a href={`/go/?go=${item.name}&url=${item.go}`} style={{fontSize: 14, color: 'black'}}>{item.displayUrl}</a>
              </div>
              
              <div style={{marginTop: 20, marginBottom: 20}}>
                <a href={`/go/?go=${item.name}&url=${item.go}`} style={{fontWeight: 700, textDecoration: 'none', color: 'blue'}}>{item.extraLink}</a>
              </div>
            </div>
          
      

          <div style={{textAlign: 'center', paddingLeft: 30, paddingRight: 30, paddingBottom : 30}}>
            <p style={{fontSize: 16, fontWeight: 700, color: 'black'}}>{item.col2Title}</p>

            <div style={{textAlign: 'center', maxWidth: 350, margin: 'auto'}}>
            <ul style={{textAlign: 'left'}}>
            <p style={{fontSize: 16, fontWeight: 700, color: 'black'}}>Avis des clients :</p>
            {item.col2Li1 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li1}</li>: null}
            {item.col2Li2 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li2}</li>: null}
              {item.col2Li3 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li3}</li>: null}
              {item.col2Li4 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li4}</li> : null}
            </ul>
            </div>
            <p style={{fontSize: 16, color: 'blue', marginTop: 40}}>{item.col2Highlight}</p>

          </div>
          </div>

         </a>
        </div>
        </>
  )
}

  const renderRow = (item, index) => {

    const getStars = () => {
      if(item.stars === 5) return <ReactStars {...fiveStars} />
      else if(item.stars === 4) return <ReactStars {...fourStars} />
      else if(item.stars === 3) return <ReactStars {...threeStars} />
    }

    const getLogo = () => {
      if(item.name === 'Coorpacademy') return coorpacademy
      else if (item.name === 'Edflex') return edflex
      else if (item.name === 'Linkedin Learning') return linkedinlearning
      else if (item.name === 'Crossknowledge') return crossknowledge
      else if (item.name === 'Kokoroe') return kokoroe
      else if (item.name === 'Skillsoft') return skillsoft
    }

    return (
      <>

      <div className='scoreRow' style={{marginBottom :20, background: 'white'}}>
        <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'>
       
        <div style={{display: 'flex', padding: 30}}>
          
          
          <div style={{minWidth: 220}}>
          <div style={{display: 'flex', marginTop: -32}}>
          <div style={{marginTop: 4}} ><span style={{background: 'pink', paddingLeft: 15, paddingRight: 15, paddingBottom: 3, paddingTop: 4, color: 'rgb(229, 35, 79)', fontWeight: 700}}>{index +1}</span></div>
          {item.feature ? <div style={{background: '#dc3545', borderBottomRightRadius: 5}}><span style={{color: 'white', fontWeight: 700, paddingLeft: 10, paddingRight: 10, fontSize: 14}}>PLUS POPULAIRE</span></div>: null}
          </div>
          <div style={{marginTop: 30}}>
          <Image src={getLogo()}  width={256} height={200} alt="" />
          </div>
          </div>

          <div style={{width: 600}}>
            <p style={{fontSize: 16, fontWeight: 700, color: 'black'}}>{item.col2Title}</p>
            <p style={{fontSize: 16, fontWeight: 700, color: 'black'}}>Avis des clients :</p>
            <ul>
            {item.col2Li1 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li1}</li>: null}
            {item.col2Li2 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li2}</li>: null}
              {item.col2Li3 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li3}</li>: null}
              {item.col2Li4 ? <li style={{fontSize: 15, color: 'black'}}>{item.col2Li4}</li> : null}
            </ul>
            <p style={{fontSize: 16, color: 'blue'}}>{item.col2Highlight}</p>
          </div>
     
            <div style={{textAlign: 'center', minWidth: 220}}>
              <div style={{display: 'flex', justifyContent:'center', maxWidth: 200}}>
                {getStars()} <span style={{fontSize: 24, marginLeft: 10, fontWeight: 700, color: 'black'}}>{item.score}</span>
              </div>
              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'><Button variant="danger" style={{width: 200, marginTop: 20, color: 'white', fontWeight: 700}}>Voir l'offre</Button></a>
              <div>
              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" style={{fontSize: 14, color: 'black'}}>{item.displayUrl}</a>
              </div>
              <div style={{marginTop: 20}}>
              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" style={{fontWeight: 700, textDecoration: 'none', color: 'blue'}}>{item.extraLink}</a>
              </div>
            </div>
          </div>
           </a>
          </div>


          </>
    )
  }


  return (
    <>

    <Container style={{maxWidth: 1140, margin: 'auto', marginTop: 20}}>

<div id='min992'>
{data.filter(item => item.live !== 'no').map(renderRow)}
</div>
<div id='max992'>
{data.filter(item => item.live !== 'no').map(renderRowMob)}
</div>

     
  
    </Container>

    </>
  )
}

export default HebergementPodcast
