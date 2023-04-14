import { Container, Row, Col, Button, Dropdown, Table} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import data from '../intelligence-artificielle/data.json'
import Seo from "../../components/seo";
import Start from "../../components/Blocks/Start"
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
        title="Code Intelligence Articielle"
        description="Liste des solutions d'intelligence artificielle pour le code"
      />
         
     
          <Container fluid style={{ paddingTop: 20, paddingBottom: 70}}>
   
          <Container style={{maxWidth: 1140}}>
          <Breadcrumbs link="/intelligence-artificielle/" text='IA Code' cat="Intelligence Artificielle"/>
          <h1 id='compareh1'>Code (Intelligence Articielle)</h1>
          <p id='compareh2' style={{marginLeft: 5, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Liste des solutions d'intelligence artificielle pour le code (mise à jour {n} {y})</p>
      

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
 
          {data.filter(company => company.category === 'Code').map(renderCompany)}
          </tbody>
</Table>

          </Container>
          <Start/>
          </Layout>
  )
}

export default Ia