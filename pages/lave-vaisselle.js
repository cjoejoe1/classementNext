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
import choisir from '../images/lave-vaisselle-choisir.png'
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

  const handleWhat = (e) => {
    setValues({...values, choice: e})
  }
  
  const navigate = () => {
    if(values.choice === 'Créer un site internet') return router.push('/site-internet/')
    // else if(values.choice === 'Modifier un site existant') return router.push('/site/demande/')
    else if(values.choice === 'Diagramme de gantt') return router.push('/diagramme-de-gantt/')
    else if(values.choice === 'Trouver plus de clients (SEO)') return router.push('/comparateur/logiciel-seo/')
    else if(values.choice === 'Gérer vos clients (CRM)') return router.push('/comparateur/logiciel-crm/')
    else if(values.choice === 'Intelligence Artificielle') return router.push('/intelligence-artificielle/')
    else if(values.choice === 'Texte') return router.push('/texte/')
    else if(values.choice === 'Video') return router.push('/video/')
  }

  return (
    <Layout url="lave-vaisselle" category="lave-vaisselle" type="category">
      
      <Seo title="Meilleur lave-vaisselle 2023 - comparatif et classement complet"
      description="Recevez un comparatif complet avec les meilleurs lave-vaisselle: couleur, fonction séchage, automatique"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={9}>
          <h1 className='h1compare' id='comparatif' style={{textAlign: 'left', color: 'black', marginTop: 5, paddingTop: 50}}>Recevez le classement lave-vaisselle<span id='min992'>*</span><span id='max992'> 2023</span></h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">*Le <span style={{fontWeight: 700}}>comparatif complet 2023</span> directement <span style={{fontWeight: 700}}>par e-mail</span>.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div style={{display: 'flex', marginTop: 30}}>
      
          
                     
          <Newsletter 
                  tag='lave-vaisselle'
                  // form="https://app.convertkit.com/forms/2945089/subscriptions"
                  />
                </div>
          </div>
           
        </Col>
        

        <Col sm={3} style={{minWidth: 200}} id='min992'>
          <div style={{width: 500, marginLeft: -110, marginTop: 10}}>
            <div style={{maxWidth: 400}}>
          <Image src={lavevaisselle} width={600} height={400}/>
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
          <Image src={lavevaisselle} width={600} height={400}/>
          </div>
          <div style={{marginTop: -150, marginLeft: 60}}>
         <Image src={stars} width={270} height={180}/>
         </div>
         </div>
         <div id="comment" style={{marginTop: -70, paddingTop: 90}}>
      <OneTwoThree/>
      </div>
   <Container id='guide' style={{maxWidth: 800, margin: 'auto', marginTop: -90, paddingTop: 110, paddingLeft: 25, paddingRight: 25}}>
   <h2 style={{textAlign: 'center'}}>Comment trouver le meilleur lave-vaisselle ?</h2>
   <div style={{marginTop: 40, marginBottom: 40}}>
   <Image src={choisir} width={1200} height={765}/></div>
   <p>Il y a plusieurs facteurs à considérer lorsque vous choisissez un lave-vaisselle :</p>

<h3>Taille de votre lave-vaisselle</h3>
<p>Vérifiez la taille de votre cuisine et choisissez un lave-vaisselle qui s'intègrera parfaitement à l'espace disponible. Il existe des modèles encastrables et des modèles indépendants.
</p>
<h3>Capacité</h3>

<p>Déterminez combien de couverts et de plats vous devez laver régulièrement et choisissez un lave-vaisselle avec une capacité suffisante pour répondre à vos besoins.
</p>
<h3>Consommation d'eau et d'énergie</h3>

<p>Certains lave-vaisselle sont plus écoénergétiques que d'autres. Recherchez des modèles qui ont une consommation d'eau et d'énergie réduite pour économiser de l'argent à long terme.
</p>
<h3>Programme de lavage</h3>

<p>Vérifiez les programmes de lavage disponibles et choisissez un lave-vaisselle qui a des options pour les types de vaisselle et de saleté que vous rencontrez le plus souvent.
</p>
<h3>Niveau sonore</h3>

<p>Si vous avez une cuisine ouverte sur le salon, vous voudrez peut-être opter pour un lave-vaisselle qui fonctionne à un niveau sonore plus bas, pour ne pas perturber le calme de votre maison.
</p>
<h3>Marque et service après-vente</h3>

<p>Choisissez une marque réputée et vérifiez les options de service après-vente disponibles, comme la garantie et les centres de réparation, pour être sûr que vous pourrez obtenir de l'aide si quelque chose ne va pas avec votre lave-vaisselle.
</p>
   </Container>
    </Layout>
  )
}

export default Category
