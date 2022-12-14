import React from 'react'
import { ColumnFilter } from '../ColumnFilter'

export const COLUMNS = [
  {
    Header: 'Logiciel SEO',
    accessor: 'SEO SoftwareFR',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 170,
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
 
//   {
//     Header: 'Essai gratuit',
//     accessor: 'Free trial',
//     Filter: ColumnFilter,
//     width: 150,
//     padding: 27,
//     Cell : e => {

//       if(e.value === 'No'){
//         return(
//           <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faTimes} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
//         </div>
//         )
//       }
//       else {
//         return (
//           <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//             <div style={{fontSize: 24}}>{e.value}</div>
//             <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>jours</div>
//           </div>
          
//         )
// }},},




{
  Header: 'Tarif mensuel',
  accessor: 'Paid monthly',
  Filter: ColumnFilter,
  width: 160,
  padding: 27,
  Cell : e => {

      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24}}>{e.value}€</div>
          <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
        </div>
        
      )
}},

// {
//   Header: 'Tarif annualisé',
//   accessor: 'Paid yearly',
//   Filter: ColumnFilter,
//   width: 150,
//   padding: 27,
//   Cell : e => {

//     return (
//       <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24}}>{e.value}€</div>
//         <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
//       </div>
      
//     )
// }},

// {
//   Header: 'Projects',
//   accessor: 'Projects',
//   Filter: ColumnFilter,
//   width: 130,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'Unknown'){
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 20, padding: 8}}>{e.value}</div>
//         </div> 
//       )
//     } else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24, padding: 8}}>{e.value}</div>
//         </div> 
//       )
//     }
// }},

// {
//   Header: () => (<div style={{float: 'left', marginLeft: 35, marginRight: -9, marginTop: -10}}><div>Mots Clés </div><div style={{marginTop: -5}}>Traqués</div></div>),
//   accessor: 'Tracked keywords',
//   Filter: ColumnFilter,
//   width: 150,
//   padding: 27,
//   Cell : e => {

//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}</div>
//           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ semaine</div>
//         </div>
        
//       )
// }},

// {

//   Header: () => (<div style={{float: 'left', marginLeft: 35, marginRight: -9, marginTop: -10}}><div>Pages </div><div style={{marginTop: -5}}>analysées</div></div>),
//   accessor: 'Pages to crawl',
//   Filter: ColumnFilter,
//   width: 150,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'Unknown'){
//       return(
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 20}}>Non disponible</div>
//       </div>
//       )
//     }
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}</div>
//           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>/ mois</div>
//         </div>
        
//       )
// }},},
  


  
//   {
//     Header: 'En savoir +',
//     accessor: 'WebsiteFR',
//     width: 180,
//     padding: 18,
//     Cell: e =>{
//       let val = e.value.split(',')

//       return (
//         // <span>{e.value}</span>
//         <div style={{padding: 6}}>

// <a href={`/go/?go=${val[0]}&url=${val[2]}`}
//          state={{url: val[1]}}
//          target='_blank' rel="noreferrer">
//                 <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 120, padding: 7, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FontAwesomeIcon icon={faAngleDoubleRight} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
//           </a>
//         </div>
//       )
//     },
//   },
]