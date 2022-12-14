import React from 'react'
import { ColumnFilter } from '../ColumnFilter'
import * as Bs from "react-bootstrap"
import { FaAngleDoubleRight, FaTimes, FaCheck} from 'react-icons/fa'


export const COLUMNS = [
  {
    Header: 'Logiciel Amazon',
    accessor: 'Amazon SoftwareFR',
    Filter: ColumnFilter,
    sticky: 'left',
    width: 180,
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
  
        Header: () => (<div style={{float: 'left', marginLeft: 8, marginRight: -7, marginTop: -10}}><div>Optimisation </div><div style={{marginTop: -5}}>SEO</div></div>),
        accessor: 'SEO optimizing',
        Filter: ColumnFilter,
        width: 110,
        padding: 27,
        Cell : e => {
        
          if(e.value === 'Yes'){
            return (
              <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
              </div>
            ) 
          } else{
            return (
              <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
              <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
            </div>
            )
          }},},

          {
            Header: 'Avis',
            accessor: 'Reviews management',
            Filter: ColumnFilter,
            width: 110,
            padding: 27,
            Cell : e => {
            
              if(e.value === 'Yes'){
                return (
                  <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                    <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                  </div>
                ) 
              } else{
                return (
                  <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                  <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                </div>
                )
              }},},

              {
                
                Header: () => (<div style={{float: 'left', marginLeft: 8, marginRight: -7, marginTop: -10}}><div>Recherche </div><div style={{marginTop: -5}}>Produit</div></div>),
                accessor: 'Product research',
                Filter: ColumnFilter,
                width: 110,
                padding: 27,
                Cell : e => {
                
                  if(e.value === 'Yes'){
                    return (
                      <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                        <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                      </div>
                    ) 
                  } else{
                    return (
                      <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                      <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                    </div>
                    )
                  }},},

                  {
                    Header: () => (<div style={{float: 'left', marginLeft: 8, marginRight: -7, marginTop: -10}}><div>Recherche </div><div style={{marginTop: -5}}>Mots Clés</div></div>),
                    accessor: 'Keyword research',
                    Filter: ColumnFilter,
                    width: 110,
                    padding: 27,
                    Cell : e => {
                    
                      if(e.value === 'Yes'){
                        return (
                          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                            <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                          </div>
                        ) 
                      } else{
                        return (
                          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                          <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                        </div>
                        )
                      }},},

                      {
                      
                        Header: 'Commandes',
                        accessor: 'Order management',
                        Filter: ColumnFilter,
                        width: 110,
                        padding: 27,
                        Cell : e => {
                        
                          if(e.value === 'Yes'){
                            return (
                              <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                              </div>
                            ) 
                          } else{
                            return (
                              <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                              <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                            </div>
                            )
                          }},},

                          {
                       
                            Header: () => (<div style={{float: 'left', marginLeft: 8, marginRight: -7, marginTop: -10}}><div>Recherche </div><div style={{marginTop: -5}}>Compétition</div></div>),
                            accessor: 'Competitor research',
                            Filter: ColumnFilter,
                            width: 110,
                            padding: 27,
                            Cell : e => {
                            
                              if(e.value === 'Yes'){
                                return (
                                  <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                    <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                                  </div>
                                ) 
                              } else{
                                return (
                                  <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                  <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                                </div>
                                )
                              }},},

                              {
                            
                                Header: () => (<div style={{float: 'left', marginLeft: 8, marginRight: -7, marginTop: -10}}><div>Automatisation </div><div style={{marginTop: -5}}>Email</div></div>),
                                accessor: 'Email automation',
                                Filter: ColumnFilter,
                                width: 110,
                                padding: 27,
                                Cell : e => {
                                
                                  if(e.value === 'Yes'){
                                    return (
                                      <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                        <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                                      </div>
                                    ) 
                                  } else{
                                    return (
                                      <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                      <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
                                    </div>
                                    )
                                  }},},

                                  {
                                    Header: 'Retours',
                                   
                                    accessor: 'Refunding',
                                    Filter: ColumnFilter,
                                    width: 110,
                                    padding: 27,
                                    Cell : e => {
                                    
                                      if(e.value === 'Yes'){
                                        return (
                                          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                            <div style={{fontSize: 24, padding: 8}}><FaCheck style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: '#0ea20e'}}/></div>
                                          </div>
                                        ) 
                                      } else{
                                        return (
                                          <div style={{fontFamily: '"Helvetica", Sans-serif'}}>
                                          <div style={{fontSize: 24, padding: 8}}><FaTimes style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5, color: 'red'}}/></div>
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
                <Bs.Button id="comparateurButton" type="submit" className="btn-lg" style={{height: 40, backgroundColor: '#E5234F', padding: 7, borderColor: '#E5234F', width: 120, fontSize: 14, boxShadow: '0 0 8px 0 rgb(0 0 0 / 30%)'}}>Voir l'offre <FaAngleDoubleRight style={{marginTop: 0, marginBottom: -3, fontSize: 24, marginLeft: 5}}/></Bs.Button>
          </a>
        </div>
      )
    },
  },
]