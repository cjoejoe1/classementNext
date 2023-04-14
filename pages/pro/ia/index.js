import {useState} from 'react'
import { Container, Row, Col, Button, Dropdown, Table} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import data from './data.json'
import Seo from "../../components/seo";
import Link from 'next/link'
import Hero from '../../components/Blocks/HeroPictureIA'
import What from '../../components/Blocks/WhatIA'
import { useRouter } from 'next/router'
import { FaAngleDoubleRight} from 'react-icons/fa'
import Image from 'next/image'
import pro from '../../images/robot.png'
const Ia = () => {

  const router = useRouter()
  const [values, setValues] = useState({
    choice: '',
  })

  const handleWhat = (e) => {
    setValues({...values, choice: e})
  }

  const navigate = () => {
    if(values.choice === 'Audio') return router.push('/intelligence-artificielle/audio/')
    else if(values.choice === 'Chatbot') return router.push('/intelligence-artificielle/chatbot/')
    else if(values.choice === 'Code') return router.push('/intelligence-artificielle/code/')
    else if(values.choice === 'Data') return router.push('/intelligence-artificielle/data/')
    else if(values.choice === 'Gaming') return router.push('/intelligence-artificielle/gaming/')
    else if(values.choice === 'Image') return router.push('/intelligence-artificielle/image/')
    else if(values.choice === 'Machine Learning') return router.push('/intelligence-artificielle/machine-learning/')
    else if(values.choice === 'Texte') return router.push('/intelligence-artificielle/texte/')
    else if(values.choice === 'Search') return router.push('/intelligence-artificielle/search/')
    else if(values.choice === 'Vidéo') return router.push('/intelligence-artificielle/video/')
  }

  const renderCompany = (item, index) => {

    const getWebsite = () => {
      if(item.website[0] !== 'h' && item.website[1] !== 't') return `https://www.${item.website}`
      else return item.website
    }


    return (
    <tr>
      <td>{item.name}</td>
      <td><a href={getWebsite()} target="_blank"  rel="noreferrer nofollow">{item.website}</a></td>
      <td>{item.category}</td>
      <td>{item.summary}</td>
    </tr>
    )
    
  }

  return (
    <Layout >
           <Seo
        title="Intelligence Artificielle (IA)"
        description="Découvrez les meilleurs outils qui utilise l'intelligence artificielle"
      />
         
         <div style={{ maxWidth: 1140, margin: 'auto', marginTop: 50}}>
       <div id='homeBox'>
        <Row style={{}}>
          <Col sm={7}>
          <h1 id='h1home' style={{textAlign: 'left', color: 'black', marginTop: 55}}>Intelligence Artificielle.</h1>
          <p style={{fontSize: 20, color: 'black'}} id="min992">Utilisez l'intelligence artificielle pour créer plus vite.</p>
          <div style={{maxWidth: 600, marginTop: 20}}>
          <div style={{display: 'flex', marginTop: 30}}>
      
          <Dropdown onSelect={handleWhat} id="noMobile">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{textAlign: 'left', height: 60, fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20}}>{values.choice || `Choisissez votre projet `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey='Audio' active={false}>Audio</Dropdown.Item>
                  <Dropdown.Item eventKey='Chatbot' active={false}>Chatbot</Dropdown.Item>
                  <Dropdown.Item eventKey='Code' active={false}>Code</Dropdown.Item>
                  <Dropdown.Item eventKey='Data' active={false}>Data</Dropdown.Item>
                  <Dropdown.Item eventKey='Gaming' active={false}>Gaming</Dropdown.Item>
                  <Dropdown.Item eventKey='Image' active={false}>Image</Dropdown.Item>
                  <Dropdown.Item eventKey='Machine Learning' active={false}>Machine Learning</Dropdown.Item>
                  <Dropdown.Item eventKey='Texte' active={false}>Texte</Dropdown.Item>
                  <Dropdown.Item eventKey='Search' active={false}>Search</Dropdown.Item>
                  <Dropdown.Item eventKey='Vidéo' active={false}>Vidéo</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                     
                          <Button id="noMobile" onClick={navigate} style={{minWidth: 200, height: 60, background: '#e5224f', borderColor: '#e5224f', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20, marginLeft : 10}}>Je me lance <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>
                     
                          

                </div>

                <div style={{ marginTop: 0}} id='noDesktop'>
      
      <Dropdown onSelect={handleWhat}  >
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" style={{minWidth: '100%', textAlign: 'left', height: 60, fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20}}>{values.choice || `Choisissez votre projet `}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey='Audio' active={false}>Audio</Dropdown.Item>
              <Dropdown.Item eventKey='Chatbot' active={false}>Chatbot</Dropdown.Item>
              <Dropdown.Item eventKey='Code' active={false}>Code</Dropdown.Item>
              <Dropdown.Item eventKey='Data' active={false}>Data</Dropdown.Item>
              <Dropdown.Item eventKey='Gaming' active={false}>Gaming</Dropdown.Item>
              <Dropdown.Item eventKey='Image' active={false}>Image</Dropdown.Item>
              <Dropdown.Item eventKey='Machine Learning' active={false}>Machine Learning</Dropdown.Item>
              <Dropdown.Item eventKey='Texte' active={false}>Texte</Dropdown.Item>
              <Dropdown.Item eventKey='Search' active={false}>Search</Dropdown.Item>
              <Dropdown.Item eventKey='Vidéo' active={false}>Vidéo</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
                 
                      <Button  onClick={navigate} style={{marginTop: 10, minWidth: '100%', height: 60, background: '#e5224f', borderColor: '#e5224f', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, fontSize: 20, marginLeft : 0}}>Je me lance <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></Button>
                 
                      

            </div>
          </div>
        </Col>
        

        <Col sm={5} style={{maxWidth: 300}} id='min992'>
        <div style={{marginLeft: 40, marginTop: 20}}>
         <Image src={pro} width={400} height={400}/>
         </div>
        </Col>
        </Row>
        </div>
       </div>
       {/* <Container style={{maxWidth: 1140, marginTop: 60}}>
          <Table striped bordered hover responsive>
<thead><tr style={{background: 'white'}}>

  <th style={{minWidth: 220}}>Intelligence Artificielle</th>
  <th>Site internet</th>
  <th style={{minWidth: 100}}>Type d'IA</th>
  <th style={{minWidth: 500}}>Que fait l'intelligence artificielle ?</th></tr></thead>

<tbody>
 
          {data.filter(company => company.category === 'Image').map(renderCompany)}
          </tbody>
</Table>

          </Container> */}
     <What/>
          {/* <Container fluid style={{ paddingTop: 20, paddingBottom: 50}}>
   
          <Container style={{maxWidth: 1140, marginTop: 170}}>
          <Breadcrumbs  text='Intelligence Artificielle' />
          <h1 id='compareh1'>Intelligence Articielle (IA)</h1>
         
      

  </Container>  
         
          </Container> */}

        
          </Layout>
  )
}

export default Ia