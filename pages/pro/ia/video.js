import { Container, Row, Col, Button, Dropdown, Table} from "react-bootstrap";
import Breadcrumbs from '../../../components/Blocks/Breadcrumbs'
import Layout from '../../../components/layout'
import data from '../../../components/data/ia/data.json'
import Seo from "../../../components/seo";
import Start from "../../../components/Blocks/Start"
import Top3 from "../../../components/data/Top3"
const Ia = () => {

  const category = 'chatbot'

  var d = new Date();
    var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    var n = month[d.getMonth()];
    var y = d.getFullYear();


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
        title="Vidéo Intelligence Articielle"
        description="Liste des solutions d'intelligence artificielle pour la vidéo"
      />
         
         <Breadcrumbs link="/pro/" text='IA Vidéo' cat="Pro"/>
         <Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 100, paddingBottom: 50}}>
   
          <Container style={{maxWidth: 1140}}>
    
          <h1 id='compareh1'>Meilleur Créateur de Vidéos de 2025</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Liste des solutions d'intelligence artificielle pour la vidéo (mise à jour {n} {y})</p>
      

  </Container>  
         
          </Container>

          <Container style={{maxWidth: 1140, marginTop: -60}}>
          <Table striped bordered hover responsive>
<thead><tr style={{background: 'white'}}>

  <th style={{minWidth: 220}}>Intelligence Artificielle</th>
  <th>Site internet</th>
  <th style={{minWidth: 100}}>Type d'IA</th>
  <th style={{minWidth: 500}}>Que fait l'intelligence artificielle ?</th></tr></thead>

<tbody>
 
          {data.filter(company => company.category === 'Video').map(renderCompany)}
          </tbody>
</Table>

          </Container>
          {/* <Start/> */}
          </Layout>
  )
}

export default Ia