import {useState} from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Breadcrumbs from '../../components/Blocks/Breadcrumbs'
import Layout from '../../components/layout'
import Link from 'next/link'
import Disclosure from '../../components/Blocks/Disclosure'
import Seo from "../../components/seo";
import DataTable from '../../components/data/hebergementPodcast/hebergementPodcast'
import { Article, Input } from "../../components/Core";



function HebergementPodcast(props) {
  const [price, setPrice] = useState(0);
  const [storage, setStorage] = useState(0);
  const [multiplier, setMultiplier] = useState(1)

  

    return (
      <Layout target="pro">
              <Seo
        title="Comparatif digital learning - Classement.com"
        description="Trouvez le meilleur du digital learning avec classmeent.com"
      />
        
        <Breadcrumbs link="/pro/"  text='Hébergement podcast'  cat="Pro"/>
        <Container fluid style={{background: 'rgb(243,243,243)', paddingTop: 100, paddingBottom: 50}}>
        <Container style={{maxWidth: 1140}}>
      
          {/* <Row style={{background: 'black'}}> */}
    
      {/* </Row> */}

          <h1 id='compareh1'>Hébergements Podcast <span id='noMobile'>(Classement 2025)</span></h1>
          <p id='compareh2' style={{marginLeft: 2, marginBottom: 25, fontWeight: 300, fontSize: 24, marginTop: -10}}>Quel est le meilleur hébergement pour votre podcast?</p>
          <div style={{marginLeft: 10, marginTop: 0}}>
       <p style={{fontSize: 16}}><span id='oneTwo'>1</span> Utilisez le menu de notre <span style={{fontWeight: 700}}>comparateur hébergement podcast</span> pour déterminer vos priorités.</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>2</span> Comparez les offres par tarifs ainsi que les offres promos disponible dès aujourd’hui.</p>
       <p style={{fontSize: 16}}><span id='oneTwo'>3</span> Sélectionnez le <span style={{fontWeight: 700}}>meilleur hébergeur podcast</span>, celui qui correspond le plus a vos besoins.</p>
       </div>
          {/* <FilterForm/> */}
         
            <Row className="justify-content-center">
              <Col>
              <Row style={{marginBottom: 40}}><Col>
              <Input style={{height: 50, padding: 10, marginLeft: 4, marginTop:20}} placeholder="Stockage"
 onChange={(e) => setStorage(e.target.value)}/>
</Col><Col>
<div>
 <p style={{marginTop: 10}}>Min price is {price}</p>
      <Input type="range" value={price} min='0' max='120' onChange={(e) => { setPrice(e.target.value);}} className='slider' style={{marginTop: -25}}/>
      </div>
      </Col>
      <Col>
      <Input style={{height: 50, padding: 10, marginRight: 20, marginTop:20}} placeholder="Tarifs Annualisé * [num]"
 onChange={(e) => setMultiplier(e.target.value)} />
      </Col>
              </Row>
              
              <Disclosure/>
              <DataTable priceOutside={price} storageOutside={storage} multiplierOutside={multiplier} />
              {/* <DataTableMobile priceOutside={price} storageOutside={storage} multiplierOutside={multiplier}/> */}
       
              </Col>
            </Row>

    

          </Container>
          <Row style={{background: 'linear-gradient(90deg, rgb(69 50 235) 0px, rgb(69, 49, 236) 60%, rgb(69, 49, 236) 0px, rgb(21, 7, 140))', height: 120, marginTop: -25, marginBottom: -50}}>

          </Row>
          </Container>

        <Container>
        <h2>Comment choisir le meilleur hébergement pour votre podcast?</h2>
            {/* <Video
        videoSrcURL="https://www.youtube.com/embed/tlat16ojxsE"
        videoTitle="Comment choisir le meilleur hébergement pour votre podcast?"
      /> */}
        <p>Vous souhaitez créer un podcast? Ou vous avez déjà enregistré votre premier épisode? Désormais il faut l’héberger et le distribuer sur les différentes plateformes de podcasts comme Spotify ou Apple Podcasts. 
        </p><p>Et c’est là que commence le casse-tête. Il y’a tellement d’offres, d’options et de tarifs qu’il n’est pas toujours simple de choisir la formule qui vous correspond le mieux.
</p><p>Ce comparatif des hébergements de podcast répertorie les tarifs des meilleures solutions. Les offres ont été divisées par pack et classées par tarifs mensuels et mensuels annualisés ainsi que selon le nombre de téléchargements disponibles (en nombre d’écoutes) et la capacité de stockage (en heures) de chacune de ces offres.
</p><p>La clé est de déterminer à quelle étape vous êtes dans votre carrière de podcasteur. C’est complètement ok de commencer avec un prestataire économique au début et de passer chez un concurrent lorsque votre audience décolle. Le plus important est de commencer vite, pour apprendre le plus rapidement possible et faire croître le nombre de vos écoutes.
</p>
        </Container>
       
          {/* <Article> */}
           
{/* </Article> */}

</Layout>

    )
}

export default HebergementPodcast
