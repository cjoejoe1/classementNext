import React, {useMemo} from 'react'
import data from './data.json'
import "bootstrap/dist/css/bootstrap-grid.css"
import {Container, Button} from 'react-bootstrap'
import wrike from '../../../images/logos/wrike.png'
import asana from '../../../images/logos/asana.png'
import clickup from '../../../images/logos/clickup.png'
import celoxis from '../../../images/logos/celoxis.png'
import trello from '../../../images/logos/trello.png'
import monday from '../../../images/logos/monday.png'
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
    if(item.name === 'ClickUp') return clickup
    else if (item.name === 'Wrike') return wrike
    else if (item.name === 'Asana') return asana
    else if (item.name === 'Celoxis') return celoxis
    else if (item.name === 'Trello') return trello
    else if (item.name === 'Monday') return monday
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
              {item.feature ? <div style={{background: 'rgb(229, 35, 79)', borderBottomRightRadius: 5, marginTop: 2}}><span style={{color: 'white', fontWeight: 700, paddingLeft: 10, paddingRight: 10, fontSize: 14}}>PLUS POPULAIRE</span></div>: null}
              </div>
              <div style={{maxWidth: 200, margin: 'auto', marginTop: 30}}>
              <Image src={getLogo()} width={256} height={107} alt="" />
              </div>
            </div>

         
   
            <div style={{textAlign: 'center'}}>

              <div style={{display: 'flex', justifyContent:'center', maxWidth: 200, margin: 'auto'}}>
                {getStars()} <span style={{fontSize: 24, marginLeft: 10, fontWeight: 700, color: 'black'}}>{item.score}</span>
              </div>

              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'><Button style={{width: 200, marginTop: 20, background: '#f00057', borderColor: '#f00057', color: 'white', fontWeight: 700}}>Voir le site</Button></a>
            
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
      if(item.name === 'ClickUp') return clickup
      else if (item.name === 'Wrike') return wrike
      else if (item.name === 'Asana') return asana
      else if (item.name === 'Celoxis') return celoxis
      else if (item.name === 'Trello') return trello
      else if (item.name === 'Monday') return monday
    }

    return (
      <>

      <div className='scoreRow' style={{marginBottom :20, background: 'white'}}>
        <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'>
       
        <div style={{display: 'flex', padding: 30}}>
          
          
          <div style={{minWidth: 220}}>
          <div style={{display: 'flex', marginTop: -32}}>
          <div style={{marginTop: 4}} ><span style={{background: 'pink', paddingLeft: 15, paddingRight: 15, paddingBottom: 3, paddingTop: 4, color: 'rgb(229, 35, 79)', fontWeight: 700}}>{index +1}</span></div>
          {item.feature ? <div style={{background: 'rgb(229, 35, 79)', borderBottomRightRadius: 5}}><span style={{color: 'white', fontWeight: 700, paddingLeft: 10, paddingRight: 10, fontSize: 14}}>PLUS POPULAIRE</span></div>: null}
          </div>
          <div style={{marginTop: 30}}>
          <Image src={getLogo()}  width={200} height={84} alt="" />
          </div>
          </div>

          <div style={{width: 600}}>
            <p style={{fontSize: 16, fontWeight: 700, color: 'black'}}>{item.col2Title}</p>
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
              <a href={`/go/?go=${item.name}&url=${item.go}`} target='_blank' rel="noreferrer nofollow" id='noLinkDecoration'><Button style={{width: 200, marginTop: 20, background: '#f00057', borderColor: '#f00057', color: 'white', fontWeight: 700}}>Voir le site</Button></a>
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

<div className='min992'>
{data.filter(item => item.live !== 'no').map(renderRow)}
</div>
<div  className='max992'>
{data.filter(item => item.live !== 'no').map(renderRowMob)}
</div>

     
  
    </Container>

    </>
  )
}

export default HebergementPodcast
