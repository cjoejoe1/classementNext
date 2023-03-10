import React from 'react'
import { ColumnFilter } from '../ColumnFilter'
import * as Bs from "react-bootstrap"
import { FaAngleDoubleRight, FaTimes, FaCheck} from 'react-icons/fa'


export const COLUMNS = [
  {
    Header: 'Créateur de Sites',
    accessor: 'Website BuilderFR',
    Filter: ColumnFilter,
    // sticky: 'left',
    width: 170,
    // width: 50,
    Cell: e =>{
      let val = e.value.split(',')

      return (

       <div style={{marginTop: -5}}>
         <a href={`/go/?go=${val[0]}&url=${val[2]}`}
        //  state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
         <img style={{width: 150, left: '0px !important'}} src={`/logos/${val[0].replace(' ', '').replace('.', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
       </a>

         </div>
      )
    },
  },
 
  
  

  {
    // Header: 'Custom Domain',
    Header: () => (<div style={{float: 'left', marginLeft:11, marginRight: -9, marginTop: -10}}><div>Domaine </div><div style={{marginTop: -5}}>personnalisé</div></div>),
    accessor: 'Custom Domain',
    Filter: ColumnFilter,
    width: 120,
    padding: 27,
    Cell : e => {

      if(e.value === 'No'){
        return(
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
        </div>
        )
      }
      else {
        return (
          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
   <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
          </div>
          
        )
}},},


{
  Header: () => (<div style={{float: 'left', marginLeft: 15, marginRight: -9, marginTop: -10}}><div>Domaine</div><div style={{marginTop: -5}}>Gratuit</div></div>),
  accessor: 'Free Domain',
  Filter: ColumnFilter,
  width: 120,
  padding: 27,
  Cell : e => {

    if(e.value === 'No'){
      return(
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
      </div>
      )
    }
    else {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
 <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
        </div>
        
      )
}},},

{
  Header: 'Tarifs',
  accessor: 'PriceE',
  Filter: ColumnFilter,
  width: 150,
  padding: 27,
  Cell : e => {

      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24}}>{e.value}€</div>
          <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
        </div>
        
      )
}},

{
  Header: () => (<div style={{float: 'left', marginLeft: 27, marginRight: -9, marginTop: -10}}><div>Retirer</div><div style={{marginTop: -5}}>Logo</div></div>),
  accessor: 'Remove Logo',
  Filter: ColumnFilter,
  width: 120,
  padding: 27,
  Cell : e => {

    if(e.value === 'No'){
      return(
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
      </div>
      )
    }
    else {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
 <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
        </div>
        
      )
}},},







{
  Header: 'Bandwidth',
  accessor: 'Bandwidth',
  Filter: ColumnFilter,
  width: 130,
  padding: 27,
  Cell : e => {

    if(e.value === 'Unlimited'){
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 20, padding: 8}}>Illimité</div>
        </div> 
      )
    } else if (e.value.split(' ')[1] === ' GB'){
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
        <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>GB</div>
      </div>
      )
    }
    
    else {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
        <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>MB</div>
        </div> 
      )
    }
}},


{
  Header: 'Stockage',
  accessor: 'Storage Space',
  Filter: ColumnFilter,
  width: 130,
  padding: 27,
  Cell : e => {
    if(e.value === 'Unlimited'){
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 20, padding: 8}}>Illimité</div>
        </div> 
      )
    } else if (e.value.split(' ')[1] === ' GB'){
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
        <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>GB</div>
      </div>
      )
    }
    
    else {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
        <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>MB</div>
        </div> 
      )
    }
}},

{
  Header: () => (<div style={{float: 'left', marginLeft: 14, marginRight: -9, marginTop: -10}}><div>Certificat</div><div style={{marginTop: -5}}>SSL</div></div>),
  accessor: 'SSL Certificate',
  Filter: ColumnFilter,
  width: 120,
  padding: 27,
  Cell : e => {

    if(e.value === 'No'){
      return(
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
        <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
      </div>
      )
    }
    else {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
 <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
        </div>
        
      )
}},},

  
  {
    Header: 'En savoir +',
    accessor: 'WebsiteFR',
    width: 170,
    padding: 18,
    Cell: e =>{
      let val = e.value.split(',')

      return (
        // <span>{e.value}</span>
        <div style={{padding: 6}}>

<a href={`/go/?go=${val[0]}&url=${val[2]}`}
        //  state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
                <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 120, padding: 7, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FaAngleDoubleRight style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
          </a>
        </div>
      )
    },
  },
]