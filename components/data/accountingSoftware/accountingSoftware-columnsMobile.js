import React from 'react'
import { ColumnFilter } from '../ColumnFilter'



export const COLUMNS = [
  {
    Header: 'Logiciel Comptabilité',
    accessor: 'Accounting Software',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 180,
    // width: 50,
    Cell: e =>{
      let val = e.value.split(',')
      
      return (

       <div style={{marginTop: -5}}>
         <a href={`/go/?go=${val[0]}&url=${val[2]}`}
         state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
         <img style={{width: 200}} src={`/logos/${val[0].replace(' ', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
       </a>

         </div>
      )
    },
  },
 
  // {
  //   Header: 'Pack',
  //   accessor: 'Pack',
  //   Filter: ColumnFilter,
  //   width: 200,
  //   padding: 27,
  //   Cell : e => {
  //     let val = e.value.split(',')

  //     console.log(val)
  //     return (
  //       <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
  //         <div style={{fontSize: 24, padding: 8}}>{val[1]}</div>
  //         {/* <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>par mois</div> */}
  //       </div>
        
  //     )
  //   },
  // }
  // ,
  // {
  //   Header: 'Offre',
  //   accessor: 'Discount',
  //   Filter: ColumnFilter,
  //   width: 230,
  //   padding: 27,
  //   Cell : e => {
  //     let val = e.value.split(',')
  //     if(e.value === 'no discounts' || e.value === '1 month free'){
  //       return (
  //         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
  //           <div style={{fontSize: 20, padding: 8}}>aucune réduction</div>
  //         </div>
  //       ) 
  //     } 
      
  //     else {
  //       return (
  //         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
  //           <div style={{fontSize: 24}}>{val[0]}</div>
  //           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>pour {val[1]}</div>
         
  //         </div>
  //       ) 
  //     }
      
  //   },
  // }
  // ,
  {
    Header: 'Prix Mensuel',
    accessor: 'Price - Monthly',
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
    },
  }
  ,
//   {
//     Header: 'Prix - Annualisé',
//     accessor: 'Price - Yearly',
//     Filter: ColumnFilter,
//     width: 200,
//     padding: 27,
//     Cell : e => {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}€</div>
//           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
//         </div>
        
//       )
//     },
//   }
//   ,
  
  
//   {
//     Header: 'En savoir plus',
//     accessor: 'Website',
//     width: 200,
//     padding: 18,
//     Cell: e =>{
//       let val = e.value.split(',')

//       return (
//         // <span>{e.value}</span>
//         <div style={{padding: 6}}>

// <a href={`/go/?go=${val[0]}&url=${val[2]}`}
//          state={{url: val[1]}}
//          target='_blank' rel="noreferrer">
//                 <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F',padding: 7, width: 150, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FontAwesomeIcon icon={faAngleDoubleRight} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
//           </a>
//         </div>
//       )
//     },
//   },
]