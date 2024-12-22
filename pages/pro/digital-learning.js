import React from 'react'
import {Container, Row} from "react-bootstrap"
import Seo from '../../components/seo';
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Blocks/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image'
import Disclosure from '../../components/Blocks/Disclosure'
import Top3 from '../../components/data/Top3Digital'
import data from '../../components/data/digitalLearning/data.json'
import Ranking from '../../components/data/digitalLearning/Ranking'
import sell from "../../images/digitallearning.png"
import Text from '../../components/data/gantt/Text'

function Comparateur() {

  var d = new Date();
  var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  var n = month[d.getMonth()];
  var y = d.getFullYear();




  const renderH2 = (item, index) => {

    // console.log(item.childNodes[data)
    return (
      <>
       <li><Link href={'#' + index}><a id='pageMap'>{item.innerText}</a></Link></li>
      </>
     
    )

  }


  return (

    <Layout type='special' target="pro">

        <Seo title="Classement Digital Learning | Classement.com"
         description="Classement des meilleures solutions de digital learning avec classement.com"/>
           <Breadcrumbs link="/pro/" text='Digital Learning' cat='Pro'/>
           <Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 100, paddingBottom: 50}}>
       
        <Container style={{maxWidth: 1140}}>
      
          <div style={{marginTop : -20, marginBottom:40}} id='max992'>
              {/* <Disclosure/> */}
            </div>
          <h1 id='compareh1'>Digital Learning 2025</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Trouvez la meilleure solution de digital learning.</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div id='min992'  style={{marginLeft: 10, marginTop: 0, marginBottom: 30}}>
            <p style={{fontSize: 16}}><span id='oneTwo'>1</span> Utilisez le menu de notre <span style={{fontWeight: 700}}>comparateur digital learning</span> pour déterminer vos priorités.</p>
            <p style={{fontSize: 16}}><span id='oneTwo'>2</span> Comparez les offres par tarifs ainsi que les offres promos disponible dès aujourd’hui</p>
            <p style={{fontSize: 16}}><span id='oneTwo'>3</span> Sélectionnez le <span style={{fontWeight: 700}}>meilleur du digital learning</span>, celui qui correspond le plus a vos besoins.</p>
          </div>
          <div style={{marginTop: -110, maxWidth: 360, marginRight: 0}} id='min992'>
            <Image src={sell} width={596} height={397} alt='website quotes' placeholder='tracedSVG'/></div>
          </div>
          </Container>  


</Container>
        <Container style={{maxWidth: 1140, marginTop: -50}}>
            <div>
              <div style={{marginLeft: 14, marginTop: -10, marginBottom: 10}} id='max992'>Dernière mise à jour: <span style={{fontWeight: 700}}>{n} {y}</span></div>
              <Top3 data={data}/>
            </div>


        <div style={{display: 'flex', justifyContent: 'flex-end'}}> 
          <div style={{marginRight: 20, marginTop: 10}} id='min992'>Dernière mise à jour: <span style={{fontWeight: 700}}>{n} {y}</span></div>
    
    <div style={{marginTop : 15, marginBottom : -100}} id='min992'>
      {/* <Disclosure/> */}
    </div>
    </div>

    <div style={{marginTop: 0}}>
          <Ranking/>
          </div>

          </Container>
          <Container style={{maxWidth: 1100, margin: 'auto', padding: 20}}>
       {/* <Text page="site"/> */}
          </Container>  
        </Layout>

  )
}

export default Comparateur
