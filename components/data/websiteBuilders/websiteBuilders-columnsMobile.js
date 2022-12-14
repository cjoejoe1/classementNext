import React from 'react'
import { ColumnFilter } from '../ColumnFilter'




export const COLUMNS = [
  {
    Header: 'Créateur de Sites',
    accessor: 'Website BuilderFR',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 190,
    // width: 50,
    Cell: e =>{
      let val = e.value.split(',')
      
      return (

       <div style={{marginTop: -5}}>
         <a href={`/go/?go=${val[0]}&url=${val[2]}`}
         state={{url: val[1]}}
         target='_blank'
         rel="noreferrer nofollow">
         <img style={{width: 150}} src={`/logos/${val[0].replace(' ', '').replace('.', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
       </a>

         </div>
      )
    },
  },
 
  
  

//   {
//     // Header: 'Custom Domain',
//     Header: () => (<div style={{float: 'left', marginLeft:29, marginRight: -9, marginTop: -10}}><div>Custom</div><div style={{marginTop: -5}}>Domain</div></div>),
//     accessor: 'Custom Domain',
//     Filter: ColumnFilter,
//     width: 120,
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
//    <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faCheck} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
//           </div>
          
//         )
// }},},


// {
//   Header: () => (<div style={{float: 'left', marginLeft: 29, marginRight: -9, marginTop: -10}}><div>Free</div><div style={{marginTop: -5}}>Domain</div></div>),
//   accessor: 'Free Domain',
//   Filter: ColumnFilter,
//   width: 120,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'No'){
//       return(
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faTimes} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
//       </div>
//       )
//     }
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//  <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faCheck} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
//         </div>
        
//       )
// }},},

{
  Header: 'Tarifs',
  accessor: 'PriceE',
  Filter: ColumnFilter,
  width: 145,
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
//   Header: () => (<div style={{float: 'left', marginLeft: 27, marginRight: -9, marginTop: -10}}><div>Remove</div><div style={{marginTop: -5}}>Logo</div></div>),
//   accessor: 'Remove Logo',
//   Filter: ColumnFilter,
//   width: 120,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'No'){
//       return(
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faTimes} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
//       </div>
//       )
//     }
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//  <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faCheck} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
//         </div>
        
//       )
// }},},







// {
//   Header: 'Bandwidth',
//   accessor: 'Bandwidth',
//   Filter: ColumnFilter,
//   width: 130,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'Unlimited'){
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 20, padding: 8}}>{e.value}</div>
//         </div> 
//       )
//     } else if (e.value.split(' ')[1] === ' GB'){
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
//         <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>GB</div>
//       </div>
//       )
//     }
    
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
//         <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>MB</div>
//         </div> 
//       )
//     }
// }},


// {
//   Header: 'Storage',
//   accessor: 'Storage Space',
//   Filter: ColumnFilter,
//   width: 130,
//   padding: 27,
//   Cell : e => {
//     if(e.value === 'Unlimited'){
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 20, padding: 8}}>{e.value}</div>
//         </div> 
//       )
//     } else if (e.value.split(' ')[1] === ' GB'){
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
//         <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>GB</div>
//       </div>
//       )
//     }
    
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24}}>{e.value.split(' ')[0]}</div>
//         <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>MB</div>
//         </div> 
//       )
//     }
// }},

// {
//   Header: () => (<div style={{float: 'left', marginLeft: 14, marginRight: -9, marginTop: -10}}><div>SSL</div><div style={{marginTop: -5}}>Certificate</div></div>),
//   accessor: 'SSL Certificate',
//   Filter: ColumnFilter,
//   width: 120,
//   padding: 27,
//   Cell : e => {

//     if(e.value === 'No'){
//       return(
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//         <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faTimes} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
//       </div>
//       )
//     }
//     else {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//  <div style={{fontSize: 24, padding: 8}}><FontAwesomeIcon icon={faCheck} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'green'}}/></div>
//         </div>
        
//       )
// }},},

  
//   {
//     Header: 'More info',
//     accessor: 'Website',
//     width: 170,
//     padding: 18,
//     Cell: e =>{
//       let val = e.value.split(',')

//       return (
//         // <span>{e.value}</span>
//         <div style={{padding: 6}}>

// <a href={`/go/?go=${val[0]}&url=${val[2]}`}
//          state={{url: val[1]}}
//          target='_blank'>
//                 <BS.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 120, padding: 7, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>See offer <FontAwesomeIcon icon={faAngleDoubleRight} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></BS.Button>
//           </a>
//         </div>
//       )
//     },
//   },
]