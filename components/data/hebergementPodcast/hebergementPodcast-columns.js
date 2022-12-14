import React from 'react'
import { ColumnFilter } from '../ColumnFilter'
import * as Bs from "react-bootstrap"
import { FaAngleDoubleRight, FaTimes, FaCheck} from 'react-icons/fa'
import SliderColumnFilter from '../SliderColumnFilter'
import FilterGreaterThan from '../FilterGreaterThan'



// const Columns = () => {
//   return (
//     <h1>Hello</h1>
//   )
// }

const columnsFunc = (props) => {

  console.log('numMonth', props.numMonth)
  
  return (
    [
      {
        Header: 'Hébergement Podcast',
        accessor: 'Podcast HostingFR',
        Filter: ColumnFilter,
        sticky: 'left',
        width: 230,
        // width: 50,
        Cell: e =>{
          let val = e.value.split(',')
          
          return (
    
           <div style={{marginTop: 2}}>
             <a href={`/go/?go=${val[0]}&url=${val[2]}`}
            //  state={{url: val[1]}}
             target='_blank'
             rel="noreferrer nofollow">
             <img style={{width: 150}} src={`/logos/${val[0].toLowerCase()}.png`} alt={`${e.value}`}></img>
           </a>
    
             </div>
          )
        },
      },
      {
        Header: 'Téléchargements',
        accessor: 'Downloads/Listens',
        Filter: ColumnFilter,
        width: 200,
    
        Cell: e =>{
    
          let val = e.value;
          // console.log('does it', val.split(''))
    
        
          if (val.split(' ')[1] === 'GB'){
            return (
              <div style={{fontFamily: '"Helvetica", Sans-serif'}}><div style={{fontSize: 24 }}>{val.split(' ')[0]}</div> <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>GB</div></div>
            )
          } 
          else if (val.split(' ')[1] === 'écoutes'){
            return (
              <div style={{fontFamily: '"Helvetica", Sans-serif'}}><div style={{fontSize: 24 }}>{val.split(' ')[0]}</div> <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>écoutes</div></div>
            )
          } 
    
          else return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 20, padding: 11 }}>{val}</div>
            </div>
            
          )
        },
      
      },
      {
        Header: 'Stockage',
        accessor: 'Storage',
        Filter: ColumnFilter,
        width: 200,
        padding: 27,
    
        Cell : e => {
          let val = e.value;
    
          if (val.split(' ')[1] === 'heures'){
            return (
              <div style={{fontFamily: '"Helvetica", Sans-serif'}}><div style={{fontSize: 24 }}>{val.split(' ')[0]}</div> <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>heures</div></div>
            )
          } 
    
          else return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 20, padding: 11 }}>{val}</div>
            </div>
            
          )
    
        }
      }
      ,
      {
        Header: 'Tarifs',
        accessor: 'PriceFR',
        Filter: SliderColumnFilter,
        filter: FilterGreaterThan,
        width: 200,
        padding: 27,
        Cell : e => {
          return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24}}>{e.value}€</div>
              <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>par mois</div>
            </div>
            
          )
        },
      }
      ,
      {
        Header: `Tarifs (annualisés)`,
        accessor: 'PriceFRYearly',
        Filter: SliderColumnFilter,
        filter: FilterGreaterThan,
        width: 200,
        Cell : e => {
          return (
            <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24}}>{Math.round(e.value * props.numMonth * 100) / 100}€</div>
              <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>par mois</div>
            </div>
            
          )
        },
      }
      ,
      {
        Header: 'En savoir plus',
        accessor: 'WebsiteFR',
        width: 200,
        padding: 18,
        Cell: e =>{
          let val = e.value.split(',')
    
          return (
            // <span>{e.value}</span>
            <div style={{padding: 6}}>
    
    <a href={`/go/?go=${val[0]}&url=${val[2]}`}
            //  state={{url: val[1]}}
             target='_blank'
             rel="noreferrer nofollow">
                    <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 150, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FaAngleDoubleRight style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
              </a>
            </div>
          )
        },
      },
    ]
  )

}

export default columnsFunc

