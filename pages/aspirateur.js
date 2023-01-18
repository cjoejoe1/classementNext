import {useState} from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout'
import HomeBoxes from '../components/Blocks/HomeBoxes'
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'
import { FaAngleDoubleRight} from 'react-icons/fa'
import Image from 'next/image'
import stars from '../images/stars.png'
import { GiWashingMachine, GiVacuumCleaner} from 'react-icons/gi'
import { useRouter } from 'next/router'
import What from '../components/Blocks/What'
import choisir from '../images/aspirateur-choisir.png'
import OneTwoThree from "../components/Blocks/OneTwoThree";
import lavelinge from '../images/lave-linge.png'
import lavevaisselle from '../images/lave-vaisselle.png'
import refrigerateur from '../images/refrigerateur.png'
import sitederencontre from '../images/site-de-rencontre.png'
import matelas from '../images/matelas.png'
import aspirateur from '../images/aspirateur.png'


const Category = props => {

  const router = useRouter()
const [values, setValues] = useState({
  choice: '',
})


  return (
    <Layout url="aspirateur" category="aspirateur" type="category">
      
      <Seo title="Meilleur aspirateurs 2023 - comparatif et classement complet"
      description="Recevez un comparatif complet avec les meilleurs aspirateurs: couleur, fonction séchage, automatique"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={9}>
          <h1 className='h1compare' id='comparatif' style={{textAlign: 'left', color: 'black', marginTop: 5, paddingTop: 50}}>Recevez le classement aspirateurs<span id='min992'>*</span><span id='max992'> 2023</span></h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">*Le <span style={{fontWeight: 700}}>comparatif complet 2023</span> directement <span style={{fontWeight: 700}}>par e-mail</span>.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div style={{display: 'flex', marginTop: 30}}>
      
          
                     
          <Newsletter 
                  tag='aspirateur'
                  // form="https://app.convertkit.com/forms/2945089/subscriptions"
                  />
                </div>
          </div>
           
        </Col>
        

        <Col sm={3} style={{minWidth: 200}} id='min992'>
          <div style={{width: 500, marginLeft: -110, marginTop: 10}}>
            <div style={{maxWidth: 400}}>
          <Image src={aspirateur} width={600} height={400}/>
          </div>
          <div style={{marginTop: -150, marginLeft: 60}}>
         <Image src={stars} width={270} height={180}/>
         </div>
         </div>
        </Col>
        </Row>
        </div>
       </div>
      </Container>
      {/* <What/> */}
      <div id='max992' style={{maxWidth: 400, margin: 'auto', marginTop: 10}}>
            <div style={{maxWidth: 400, margin: 'auto'}}>
          <Image src={aspirateur} width={600} height={400}/>
          </div>
          <div style={{marginTop: -150, marginLeft: 60}}>
         <Image src={stars} width={270} height={180}/>
         </div>
         </div>
         <div id="comment" style={{marginTop: -70, paddingTop: 90}}>
      <OneTwoThree/>
      </div>
   <Container id='guide' style={{maxWidth: 800, margin: 'auto', marginTop: -90, paddingTop: 110, paddingLeft: 25, paddingRight: 25}}>
   <h2 style={{textAlign: 'center'}}>Comment trouver le meilleur aspirateur ?</h2>
   <div style={{marginTop: 40, marginBottom: 40}}>
   <Image src={choisir} width={1200} height={765}/></div>
   <p>Il y a plusieurs facteurs à considérer lorsque vous choisissez un aspirateur :</p>

<h3>Type d'aspirateur</h3>

<p>Il existe différents types d'aspirateurs, tels que les aspirateurs à main, les aspirateurs à balai, les aspirateurs traîneaux et les aspirateurs robots. Chacun a ses propres avantages et inconvénients, il est donc important de choisir celui qui convient le mieux à vos besoins.
</p>
<h3>Filtre</h3>

<p>Les aspirateurs ont des filtres différents pour capturer les particules de poussière et de saleté. Certains filtres sont lavables, d'autres doivent être remplacés. Assurez-vous de choisir un aspirateur avec un filtre adapté à vos besoins.
</p>
<h3>Puissance d'aspiration</h3>

<p>La puissance d'aspiration est mesurée en volts ou en watts. Plus la puissance est élevée, plus l'aspirateur est efficace pour nettoyer les sols durs et les tapis épais.
</p>
<h3>Accessoires</h3>

<p>Certains aspirateurs ont des accessoires tels que des tuyaux d'extension et des embouts pour les coins et les recoins difficiles à atteindre. Assurez-vous que l'aspirateur que vous choisissez a les accessoires nécessaires pour nettoyer efficacement votre maison.
</p>
<h3>Niveau sonore</h3>

<p>Si vous avez un animal de compagnie ou des enfants, vous voudrez peut-être opter pour un aspirateur qui fonctionne à un niveau sonore plus bas, pour ne pas les déranger
</p>
<h3>Marque et service après-vente</h3>

<p>Choisissez une marque réputée et vérifiez les options de service après-vente disponibles, comme la garantie et les centres de réparation, pour être sûr que vous pourrez obtenir de l'aide si quelque chose ne va pas avec votre aspirateur.
</p>
   </Container>
    </Layout>
  )
}

export default Category
