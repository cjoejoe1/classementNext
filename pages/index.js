import {useState} from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout'
import HomeBoxes from '../components/Blocks/HomeBoxes'
import {Container, Row, Col, Button, Dropdown} from 'react-bootstrap'
import Newsletter from '../components/Newsletter/'
import { FaAngleDoubleRight} from 'react-icons/fa'
import Image from 'next/image'
import pro from '../images/classement-avis.png'
import { useRouter } from 'next/router'
import electromenager from '../images/part.png'
import stars from '../images/stars.png'

const Index = props => {

  const router = useRouter()
const [values, setValues] = useState({
  choice: '',
})

  const handleWhat = (e) => {
    setValues({...values, choice: e})
  }
  
  const navigate = () => {
    if(values.choice === 'Aspirateur') return router.push('/aspirateur/')
    // else if(values.choice === 'Modifier un site existant') return router.push('/site/demande/')
    else if(values.choice === 'Lave-linge') return router.push('/lave-linge/')
    else if(values.choice === 'Lave-vaisselle') return router.push('/lave-vaisselle/')
    else if(values.choice === 'Matelas') return router.push('/matelas/')
    else if(values.choice === 'Réfrigérateur') return router.push('/refrigerateur/')
    else if(values.choice === 'Site de rencontre') return router.push('/site-de-rencontre/')
  }

  return (
    <Layout page='home' target='part'>
      
      <Seo title="Classements 2023 par email - Classement.com" description="Comparatif et classements de tous les produits"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 140}}>
       <div id='proBox'>
        <Row style={{}}>
          <Col sm={9}>
          <h1 id='compareh1' style={{textAlign: 'left', color: 'black', marginTop: 55}}>Tous les classements de 2023<span id="min992">*</span></h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">*Recevez chaque <span style={{fontWeight: 700}}>comparatif</span> directement <span style={{fontWeight: 700}}>par e-mail</span>.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div id='formBlock' style={{display: 'flex'}}>
      
          <Dropdown onSelect={handleWhat} id="noMobile">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{textAlign: 'left', height: 60, fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20}}>{values.choice || `Choisissez votre produit `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='Aspirateur' active={false}>Aspirateur</Dropdown.Item>
                  <Dropdown.Item eventKey='Lave-linge' active={false}>Lave-linge</Dropdown.Item>
                  <Dropdown.Item eventKey='Lave-vaisselle' active={false}>Lave-vaisselle</Dropdown.Item>
                  <Dropdown.Item eventKey='Matelas' active={false}>Matelas</Dropdown.Item>
                  <Dropdown.Item eventKey='Réfrigérateur' active={false}>Réfrigérateur</Dropdown.Item>
                  <Dropdown.Item eventKey='Site de rencontre' active={false}>Site de rencontre</Dropdown.Item>

                </Dropdown.Menu>
                </Dropdown>
                     
                          <Button id="noMobile" onClick={navigate} style={{minWidth: 200, height: 60,  boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20, marginLeft : 10}}>Je compare <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>

                </div>
          </div>
        </Col>
        

        <Col sm={3} style={{minWidth: 200}} >
        <div id="rightPic" style={{marginTop: 10}}>
      <div style={{maxWidth: 450}}>
          <Image src={electromenager} width={600} height={400}/>
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
    {/* <Container> */}
      <HomeBoxes/>
      {/* </Container> */}
      {/* <Hero/> */}
      {/* <Tick/> */}
      {/* <What/> */}
      {/* <Tabs/> */}
      {/* <ForWho/> */}
      {/* <ForWhoReverse/> */}
      {/* <Testimonials/> */}
      {/* <Who/> */}
      {/* <Faq/> */}
    </Layout>
  )
}

export default Index
