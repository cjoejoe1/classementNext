import React from 'react'
import { ColumnFilter } from '../ColumnFilter'


export const COLUMNS = [
  {
    Header: 'Micros Podcast',
    accessor: 'Marque',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 170,
    // width: 50,
    Cell: e =>{
      let val = e.value.split(',')
      console.log(val)
      
      return (

       <div style={{marginTop: 0}}>
         <a href={`/go/?go=${val[0]}&url=${val[2]}`}
        //  state={{url: val[1]}}
         target='_blank' rel="noreferrer nofollow">
         <img style={{width: 150}} src={`/micro/${val[0].toLowerCase()}.png`} alt={`${e.value}`}></img>
       </a>

         </div>
      )
    },
  },
  // {
  //   Header: 'Modèle',
  //   accessor: 'Modèle',
  //   Filter: ColumnFilter,
  //   sticky: 'left',
  //   width: 170,
  //   // width: 50,
  //   Cell: e =>{
  //     let val = e.value.split(',')
  //     return (

  //      <div style={{marginTop: -45}}>
  //        <a href={`/go/?go=${val[0]}&url=${val[2]}`}
  //        state={{url: val[1]}}
  //        target='_blank' rel="noreferrer">
  //        <img style={{width: 150}} src={`/micro/${val[1].replace('-', '').toLowerCase()}.png`} alt={`${e.value}`}></img>
  //      </a>

  //        </div>
  //     )
  //   },
  // },
  {
    Header: 'Prix',
    accessor: 'Prix',
    Filter: ColumnFilter,
    width: 160,
    padding: 27,
    Cell : e => {
      return (
        <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
          <div style={{fontSize: 24}}>{e.value}</div>
          {/* <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>par mois</div> */}
        </div>
        
      )
    },
  }
  ,
//   {
//     Header: 'Connecteur',
//     accessor: 'Connection',
//     Filter: ColumnFilter,
//     width: 130,
//     padding: 27,
//     Cell : e => {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}</div>
//         </div>
        
//       )
//     },
//   }
//   ,

//   // {
//   //   Header: 'Taille Podcast',
//   //   accessor: 'Taille Podcast',
//   //   Filter: ColumnFilter,
//   //   width: 200,
//   //   padding: 27,
//   //   Cell : e => {
//   //     return (
//   //       <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//   //         <div style={{fontSize: 24}}>{e.value}<br></br>utilisateurs</div>
//   //       </div>
        
//   //     )
//   //   },
//   // },

//   {
//     Header: 'Taille Podcast',
//     accessor: 'Taille podcast',
//     Filter: ColumnFilter,
//     width: 150,
//     padding: 27,

//     Cell : e => {
//       let val = e.value;

//       console.log(val)
//       if(val === 1){
//         return (
//           <div style={{fontFamily: '"Helvetica", Sans-serif'}}><div style={{fontSize: 24 }}>{val}</div>
//           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>utilisateur</div></div>
//         )
//       } else {
//         return (
//           <div style={{fontFamily: '"Helvetica", Sans-serif'}}><div style={{fontSize: 24 }}>{val}</div>
//           <div style={{fontWeight: 300, fontSize: 14, marginTop: -4}}>utilisateurs</div></div>
//         )
//       }




//     }
//   },


//   {
//     Header: 'Pour qui?',
//     accessor: 'Pour qui?',
//     Filter: ColumnFilter,
//     width: 140,
//     padding: 27,
//     Cell : e => {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}</div>
//         </div>
        
//       )
//     },
//   }
//   ,
//   {
//     Header: 'Pied',
//     accessor: 'Pied',
//     Filter: ColumnFilter,
//     width: 120,
//     padding: 27,
//     Cell : e => {
//       return (
//         <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
//           <div style={{fontSize: 24}}>{e.value}</div>
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
//         <div style={{padding: 0}}>

// <a href={`/go/?go=${val[0]}&url=${val[2]}`}
//          state={{url: val[1]}}
//          target='_blank' rel="noreferrer">
//                 <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', borderColor: '#E5234F', width: 150, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FontAwesomeIcon icon={faAngleDoubleRight} style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
//           </a>
//         </div>
//       )
//     },
//   },
]