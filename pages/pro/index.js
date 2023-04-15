import {useState} from "react";
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import {Container, Row, Col, Dropdown, Button} from 'react-bootstrap'
import Seo from "../../components/seo";
import HomeBoxes from '../../components/Blocks/HomeBoxesPro'
import {FaAngleDoubleRight} from 'react-icons/fa'
import electromenager from '../../images/pro.png'
import stars from '../../images/stars.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
const LandingPage2 = () => {
  const router = useRouter()
  const handleWhat = (e) => {
    setValues({...values, choice: e})
  }
  
  const navigate = () => {
    if(values.choice === 'Digital Learning') return router.push('/pro/digital-learning/')
    // else if(values.choice === 'Modifier un site existant') return router.push('/site/demande/')
    else if(values.choice === 'Gestion de Projets') return router.push('/pro/gestion-de-projets/')
    else if(values.choice === 'Locigiel Comptable') return router.push('/pro/logiciel-comptabilite/')
    else if(values.choice === 'Logiciel CRM') return router.push('/pro/logiciel-crm/')
    else if(values.choice === 'Logiciel Podcast') return router.push('/pro/logiciel-podcast/')
    else if(values.choice === 'Logiciel SEO') return router.push('/pro/logiciel-seo/')
  }

  const [values, setValues] = useState({
    choice: '',
  })

  return (
    <Layout page='home' target="pro">
 
      <Seo
        title="Tous les comparatifs - Createur.com"
        description="Tous les outils pour les créateurs sur Youtube, Tiktok et Instagram"
      />
          {/* <Breadcrumbs link="/comparateur/" text='Hébergement podcast' cat="Comparateurs"/> */}
          <Container style={{maxWidth: 1130, margin: 'auto', marginTop: 110}}>

<div style={{ marginTop: 140}}>
 <div id='proBox'>
  <Row style={{}}>
    <Col sm={9}>
    <h1 className='h1compare' style={{textAlign: 'left', color: 'black', marginTop: 55}}>Les classements <span style={{textDecoration: 'underline', textDecorationColor: '#dc3545'}}>Pro</span> de 2023<span id="min992">*</span></h1>
    <p style={{fontSize: 24, color: 'black'}} id="min992">*Recevez chaque comparatif directement par e-mail.</p>
    <div style={{maxWidth: 600, marginTop: 20}}>
    <div id='formBlock' style={{display: 'flex'}}>

    <Dropdown onSelect={handleWhat} id="noMobile">
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{textAlign: 'left', height: 60, fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20}}>{values.choice || `Choisissez votre produit `}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey='Digital Learning' active={false}>Digital Learning</Dropdown.Item>
            <Dropdown.Item eventKey='Gestion de Projets' active={false}>Gestion de Projets</Dropdown.Item>
            <Dropdown.Item eventKey='Locigiel Comptable' active={false}>Locigiel Comptable</Dropdown.Item>
            <Dropdown.Item eventKey='Logiciel CRM' active={false}>Logiciel CRM</Dropdown.Item>
            <Dropdown.Item eventKey='Logiciel Podcast' active={false}>Logiciel Podcast</Dropdown.Item>
            <Dropdown.Item eventKey='Logiciel SEO' active={false}>Logiciel SEO</Dropdown.Item>

          </Dropdown.Menu>
          </Dropdown>
               
                    <Button id="noMobile" variant="danger" onClick={navigate} style={{minWidth: 200, height: 60,  boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20, marginLeft : 10}}>Je compare <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>

          </div>
    </div>
  </Col>
  

  <Col sm={3} style={{minWidth: 200}}>
  <div id="rightPic" style={{ marginTop: 10}}>
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
          {/* <Container fluid style={{background: 'rgb(243, 243, 243)', paddingTop: 50, paddingBottom: 0}}>
      <Container style={{maxWidth: 1140, paddingBottom: 30}}>
        <h1 id='h1home' style={{marginBottom : 10}}>Tous les comparatifs</h1>
        <p style={{fontSize: 30, color: 'grey', marginTop: -10}}>Retrouvez la liste complète des comparateurs sur createur.com</p>
    
      </Container>
      </Container> */}
      <div style={{marginTop: -50}}>
        <HomeBoxes/>
        </div>
        </Layout>
  );
};
export default LandingPage2;
