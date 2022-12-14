import React from 'react'
import { ColumnFilter } from '../ColumnFilter'
import * as Bs from "react-bootstrap"
import { FaAngleDoubleRight, FaTimes, FaCheck} from 'react-icons/fa'

export const COLUMNS = [
  {
    Header: 'Paiement en ligne',
    accessor: 'Payment Providers',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 250,
    // width: 50,
    Cell: e =>{
      let val = e.value.split(',')
      
      return (

       <div style={{marginTop: -5}}>
         <a href={`/go/?go=${val[0]}&url=${val[2]}`}
        //  state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
         <img style={{width: 200}} src={`/logos/${val[0].replace(' ', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
       </a>

         </div>
      )
    },
  },
 
  
      {
  
        Header: 'Tarif Mensuel',
        accessor: 'Monthly Fee',
        Filter: ColumnFilter,
        width: 200,
        padding: 27,
        Cell : e => {
        
          return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24, padding: 8}}>{e.value}</div>
            </div>
          ) 
          }},

          {
  
            Header: 'Cartes FR',
            accessor: 'UK Cards',
            Filter: ColumnFilter,
            width: 200,
            padding: 27,
            Cell : e => {
            
              return (
                <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                  <div style={{fontSize: 24, padding: 8}}>{e.value}</div>
                </div>
              ) 
              }},

              
              {
  
                Header: 'Cartes (hors France)',
                accessor: 'Non UK Cards',
                Filter: ColumnFilter,
                width: 200,
                padding: 27,
                Cell : e => {
                
                  return (
                    <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                      <div style={{fontSize: 24, padding: 8}}>{e.value}</div>
                    </div>
                  ) 
                  }},
        

         

  
  {
    Header: 'En savoir +',
    accessor: 'Website',
    width: 200,
    padding: 18,
    Cell: e =>{
      let val = e.value.split(',')

      return (
        // <span>{e.value}</span>
        <div style={{padding: 6}}>

<a href={`/go/?go=${val[0]}&url=${val[2]}`}
        //  state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
                <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', padding: 7, width: 120, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FaAngleDoubleRight style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
          </a>
        </div>
      )
    },
  },
]