import {useState} from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout'
import HomeBoxes from '../components/Blocks/HomeBoxes'
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'

import Image from 'next/image'
import stars from '../images/stars.png'
import { useRouter } from 'next/router'
import choisir from '../images/matelas-choisir.png'
import OneTwoThree from "../components/Blocks/OneTwoThree";
import matelas from '../images/matelas.png'


const Category = props => {

  const router = useRouter()
  const p = router.query.p
const [values, setValues] = useState({
  choice: '',
})


  return (
    <Layout url="matelas" category="matelas" type="category" page={p}>
      
      <Seo title="Meilleur matelas 2023 - comparatif et classement complet"
      description="Recevez un comparatif complet avec les meilleurs matelas: couleur, fonction séchage, automatique"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={9}>
          <h1 className='h1compare' id='comparatif' style={{textAlign: 'left', color: 'black', marginTop: 5, paddingTop: 50}}>Recevez le classement matelas<span id='min992'>*</span><span id='max992'> 2023</span></h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">*Le <span style={{fontWeight: 700}}>comparatif complet 2023</span> directement <span style={{fontWeight: 700}}>par e-mail</span>.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div id='formBlock' style={{display: 'flex'}}>
      
          
                     
          <Newsletter 
                  tag='matelas'
                  // form="https://app.convertkit.com/forms/2945089/subscriptions"
                  />
                </div>
          </div>
           
        </Col>
        

        <Col sm={3} style={{minWidth: 200}} id='min992'>
          <div style={{width: 500, marginLeft: -110, marginTop: 10}}>
            <div style={{maxWidth: 400}}>
          <Image src={matelas} width={600} height={400}/>
          </div>
          <div style={{marginTop: -185, marginLeft: 60}}>
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
          <Image src={matelas} width={600} height={400}/>
          </div>
          <div style={{marginTop: -185, marginLeft: 60}}>
         <Image src={stars} width={270} height={180}/>
         </div>
         </div>
         <div id="comment" style={{marginTop: -70, paddingTop: 90}}>
      <OneTwoThree/>
      </div>
   <Container id='guide' style={{maxWidth: 800, margin: 'auto', marginTop: -90, paddingTop: 110, paddingLeft: 25, paddingRight: 25}}>
   <h2 style={{textAlign: 'center'}}>Comment trouver le meilleur matelas ?</h2>
   <div style={{marginTop: 40, marginBottom: 40}}>
   <Image src={choisir} width={1200} height={765}/></div>
   <p>Il y a plusieurs facteurs à considérer lorsque vous choisissez un matelas :</p>

<h3>Type de matelas</h3>

<p>Il existe différents types de matelas, tels que les matelas en mousse, les matelas en mousse à mémoire de forme, les matelas en latex et les matelas à ressorts. Chacun a ses propres avantages et inconvénients, il est donc important de choisir celui qui convient le mieux à vos besoins.
</p>
<h3>Fermeté</h3>
<p>
Les matelas ont des niveaux de fermeté différents, allant de ferme à extra-doux. Déterminez votre préférence personnelle en matière de fermeté et choisissez un matelas qui convient à vos besoins.
</p>
<h3>Taille</h3>

<p>Assurez-vous de choisir un matelas qui convient à la taille de votre lit. Il existe des tailles standard telles que le simple, le double, le queen et le king size.
</p>
<h3>Matériaux</h3>

<p>Certains matelas sont fabriqués avec des matériaux plus respirants et plus durables que d'autres. Les matériaux utilisés pour fabriquer un matelas peuvent avoir un impact sur la durée de vie, le confort et les propriétés hypoallergéniques du matelas.
</p>
<h3>Garantie</h3>

<p>Assurez-vous que le matelas que vous choisissez a une garantie de qualité. Les garanties varient généralement de 1 à 10 ans.
</p>
<h3>Essai</h3>

<p>Si possible, essayez un matelas avant de l'acheter pour vous assurer qu'il est confortable pour vous. La plupart des magasins de meubles offrent des périodes d'essai de 30 jours ou plus pour vous permettre de tester le matelas dans votre propre maison.
</p>
   </Container>
    </Layout>
  )
}

export default Category
