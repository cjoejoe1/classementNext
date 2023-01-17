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

const Index = props => {

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
    <Layout >
      
      <Seo title="Classements pour les pros - Classement.com" description="Comparatif et classements pour les pros"/>
      <Container style={{maxWidth: 1140, marginTop: 110}}>

      <div style={{ marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={8}>
          <h1 id='h1home' style={{textAlign: 'left', color: 'black', marginTop: 55}}>Le meilleur produit pour chaque catégorie</h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992"><span style={{fontWeight: 700}}>Avis</span> et <span style={{fontWeight: 700}}>Classements</span> pour les meilleurs produits</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div style={{display: 'flex', marginTop: 30}}>
      
          <Dropdown onSelect={handleWhat} id="noMobile">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{textAlign: 'left', height: 60, fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20}}>{values.choice || `Choisissez votre produit `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='Créer un site internet' active={false}>Site internet</Dropdown.Item>
                  {/* <Bs.Dropdown.Item eventKey='Modifier un site existant' active={false}>Modifier un site existant</Bs.Dropdown.Item> */}
                  <Dropdown.Item eventKey='Diagramme de gantt' active={false}>Diagramme de Gantt</Dropdown.Item>
                  <Dropdown.Item eventKey='Texte' active={false}>Texte</Dropdown.Item>
                  <Dropdown.Item eventKey='Video' active={false}>Video</Dropdown.Item>
                  {/* <Bs.Dropdown.Item eventKey='Trouver plus de clients (SEO)' active={false}>Trouver plus de clients (SEO)</Bs.Dropdown.Item>
                  <Bs.Dropdown.Item eventKey='Gérer vos clients (CRM)' active={false}>Gérer vos clients (CRM)</Bs.Dropdown.Item> */}
                  {/* <Bs.Dropdown.Item eventKey='Intelligence Artificielle' active={false}>Intelligence Artificielle</Bs.Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
                     
                          <Button id="noMobile" onClick={navigate} style={{minWidth: 200, height: 60,  boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20, marginLeft : 10}}>C'est parti <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>

                </div>
          </div>
        </Col>
        

        <Col sm={4} style={{minWidth: 300}} id='min992'>
          <div style={{width: 400, marginLeft: -40, marginTop: 10}}>
            <div>
         <Image src={pro} width={600} height={400}/>
         </div>
         </div>
        </Col>
        </Row>
        </div>
       </div>
   
      <HomeBoxes/>
      </Container>
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
