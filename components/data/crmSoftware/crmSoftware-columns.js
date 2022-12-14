import React from 'react'
import { ColumnFilter } from '../ColumnFilter'
import * as Bs from "react-bootstrap"
import { FaAngleDoubleRight, FaTimes, FaCheck} from 'react-icons/fa'

const columnsFunc = (props) => {
  return(
    [
    {
      Header: 'Logiciel CRM',
      accessor: 'CRM SoftwareFR',
      Filter: ColumnFilter,
      sticky: 'left',
      width: 220,
      // width: 50,
      Cell: e =>{
        let val = e.value.split(',')
        
        return (
  
         <div style={{marginTop: -5}}>
           <a href={`/go/?go=${val[0]}&url=${val[2]}`}
          //  state={{url: val[1]}}
           target='_blank' rel="noreferrer nofollow">
           <img style={{width: 150}} src={`/logos/${val[0].replace(' ', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
         </a>
  
           </div>
        )
      },
    },
   
  
    {
      Header: 'Pack',
      accessor: 'PackFR',
      Filter: ColumnFilter,
      width: 200,
      padding: 27,
      Cell : e => {
  
       
          return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24, padding: 8}}>{e.value.split(',')[1]}</div>
             
            </div>
            
          )
  }},
  
  
   
  
  
  
  
  {
    Header: 'Tarif Mensuel',
    accessor: 'PriceFR',
    Filter: ColumnFilter,
    width: 200,
    padding: 27,
    Cell : e => {
  
      if(e.value === 'not available'){
  
        return (
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
            <div style={{fontSize: 24}}>non</div>
            <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>disponible</div>
          </div>
          
        )
      }
  
        else{
          
          return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24}}>{Math.round(e.value * props.numMonth * 100) / 100}€</div>
              <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
            </div>
            
          )
        }
  }},
  
  {
    Header: 'Tarif Annualisé',
    accessor: 'PriceFRYearly',
    Filter: ColumnFilter,
    width: 200,
    padding: 27,
    Cell : e => {
  
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24}}>{Math.round(e.value * props.numMonth * 100) / 100}€</div>
          <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
        </div>
        
      )
  }},
  
  {
    Header: 'Essai gratuit',
    accessor: 'Free trial',
    Filter: ColumnFilter,
    width: 200,
    padding: 27,
    Cell : e => {
  
      if(e.value === 'No'){
        return(
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
        </div>
        )
      } else if (e.value === 'Yes'){
        return(
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
        </div>
        )
      }
      else {
        return (
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
            <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
            <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>jours</div>
          </div>
          
        )
  }},},
  
  
    
    {
      Header: 'En savoir +',
      accessor: 'WebsiteFR',
      width: 210,
      padding: 18,
      Cell: e =>{
        let val = e.value.split(',')
  
        return (
          // <span>{e.value}</span>
          <div style={{padding: 6}}>
  
  <a href={`/go/?go=${val[0]}&url=${val[2]}`}
          //  state={{url: val[1]}}
           target='_blank' rel="noreferrer nofollow">
                  <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 150, padding: 7, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FaAngleDoubleRight style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
            </a>
          </div>
        )
      },
    },
  ])}
  
  export default columnsFunc