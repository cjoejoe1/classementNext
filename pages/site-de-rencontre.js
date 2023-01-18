import {useState} from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout'
import {Container, Row, Col} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'
import Image from 'next/image'
import stars from '../images/stars.png'
import { useRouter } from 'next/router'
import choisir from '../images/site-de-rencontre-choisir.png'
import OneTwoThree from "../components/Blocks/OneTwoThree";
import sitederencontre from '../images/site-de-rencontre.png'

const Category = props => {

  const router = useRouter()
const [values, setValues] = useState({
  choice: '',
})


  return (
    <Layout url="site-de-rencontre" category="site de rencontre" type="category">
      
      <Seo title="Meilleur site de rencontre 2023 - comparatif et classement complet"
      description="Recevez un comparatif complet avec les meilleurs sites de rencontre: couleur, fonction séchage, automatique"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={9}>
          <h1 className='h1compare' id='comparatif' style={{textAlign: 'left', color: 'black', marginTop: 5, paddingTop: 50}}>Recevez le classement site de rencontre<span id='min992'>*</span><span id='max992'> 2023</span></h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">*Le <span style={{fontWeight: 700}}>comparatif complet 2023</span> directement <span style={{fontWeight: 700}}>par e-mail</span>.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div style={{display: 'flex', marginTop: 30}}>
      
          
                     
          <Newsletter 
                  tag='site de rencontre'
                  // form="https://app.convertkit.com/forms/2945089/subscriptions"
                  />
                </div>
          </div>
           
        </Col>
        

        <Col sm={3} style={{minWidth: 200}} id='min992'>
          <div style={{width: 500, marginLeft: -110, marginTop: 10}}>
            <div style={{maxWidth: 400}}>
          <Image src={sitederencontre} width={600} height={400}/>
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
          <Image src={sitederencontre} width={600} height={400}/>
          </div>
          <div style={{marginTop: -150, marginLeft: 60}}>
         <Image src={stars} width={270} height={180}/>
         </div>
         </div>
         <div id="comment" style={{marginTop: -70, padding: 90}}>
      <OneTwoThree/>
      </div>
   <Container id='guide' style={{maxWidth: 830, margin: 'auto', marginTop: -90, paddingTop: 110, paddingLeft: 25, paddingRight: 25}}>
   <h2 style={{textAlign: 'center'}}>Comment trouver le meilleur site de rencontre ?</h2>
   <div style={{marginTop: 40, marginBottom: 40}}>
   <Image src={choisir} width={1200} height={765}/></div>
  <p>Il y a plusieurs facteurs à considérer lorsque vous choisissez un site de rencontre :</p>

<h3>Objectifs</h3>

<p>Déterminez vos objectifs en vous inscrivant sur un site de rencontre. Certains sites sont destinés aux rencontres sérieuses, d'autres aux rencontres occasionnelles. Assurez-vous de choisir un site qui répond à vos besoins.
</p>
<h3>Public cible</h3>

<p>Certains sites de rencontres sont destinés à un public spécifique, comme les seniors, les personnes LGBTQ+, les célibataires avec enfants, etc. Assurez-vous que le site que vous choisissez cible le public avec lequel vous souhaitez vous connecter.
</p>
<h3>Nombre d'utilisateurs</h3>
<p>Plus un site de rencontre a d'utilisateurs, plus vous avez de chances de rencontrer des personnes qui correspondent à vos critères. Assurez-vous de choisir un site avec un grand nombre d'utilisateurs actifs.
</p>
<h3>Fonctionnalités</h3>

<p>Recherchez des fonctionnalités telles que des matchs de compatibilité, des chats en direct, des options de filtrage avancées, etc. pour vous aider à trouver des personnes qui correspondent à vos critères.
</p>
<h3>Sécurité</h3>

<p>Assurez-vous que le site de rencontre que vous choisissez prend des mesures pour protéger vos informations personnelles et vous aider à éviter les escroqueries et les arnaques.
</p>
<h3>Coût</h3>

<p>Certains sites de rencontre sont gratuits, tandis que d'autres facturent des frais d'abonnement mensuels ou annuels. Assurez-vous de choisir un site qui convient à votre budget.
</p>
<p>Il est important de noter que la sécurité et la confidentialité des données sont des facteurs importants pour choisir un site de rencontre. Il est donc crucial de vérifier les politiques de confidentialité et de sécurité des sites avant de s'inscrire et de fournir des informations personnelles. Il est également recommandé de lire les avis et les critiques des utilisateurs pour avoir une idée de leur expérience avec le site.
</p>
   </Container>
    </Layout>
  )
}

export default Category
