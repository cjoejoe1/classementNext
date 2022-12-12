import React from 'react';
import Link from 'next/link';
import {Container, Row, Col} from "react-bootstrap"


const FAQ = (props) => {


        return (
          <Container fluid style={{marginTop: 100, marginBottom: 80 }}>
              <h2 className="display-4" style={{textAlign: 'center', margin: 'auto', marginBottom: 100, fontWeight: 700, fontSize: 60, maxWidth: 600}} >Questions - Réponses</h2>
            <Row style={{maxWidth: 900, margin: 'auto'}} >
              <Col sm> <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Createur, c’est gratuit ?</h3>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Oui! L’inscription à Createur.com est gratuite pour toujours. Vous allez recevoir 7 idées business par email pour aussi longtemps que vous le souhaitez.</p></Col>
              <Col sm><h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Je vais recevoir combien d’email ?</h3>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Vous allez recevoir 1 email par jour. Votre adresse email vous permettra aussi de vous connecter à votre espace personnel où toutes les idées de business sont listées.</p></Col>
            </Row>

            <Row style={{maxWidth: 900, margin: 'auto'}} >
              <Col sm> <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>Pouvez-vous m’aider sur un projet personnel ?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Réponse courte: oui, mais on ne pourra pas aider tout le monde. N’hésitez pas à envoyer vos questions par email. Plus votre question est précise, plus notre réponse sera pertinente.</p></Col>
              <Col sm>          <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>J’ai utilisé Createur.com pour lancer mon business. Comment vous remercier ?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Nous sommes très heureux d’avoir pu vous inspirer! N’hésitez pas à partager Createur.com avec vos amis et de poster un avis en ligne.</p></Col>
            </Row>

            <Row style={{maxWidth: 900, margin: 'auto'}} >
              <Col sm><h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>J’ai toutes les idées qu’il me faut ? Comment me désinscrire ?</h3>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 0}}>Cliquez tout simplement sur désinscription en base votre email de Createur.com.</p></Col>
              <Col sm>
                {/* <h3 className="display-4" style={{textAlign: 'left', marginBottom: 40, fontWeight: 800, fontSize: 25}}>{data.Q5}</h3>
                <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 0}}>{data.A5}</p> */}
                </Col>
            </Row>

            <Row style={{maxWidth: 300, margin: 'auto', marginTop: 50}}>

         <p style={{textAlign: "center"}}>Vous n'avez pas trouvé votre réponse ?<br></br>
         <Link href="/contactez-nous/">Contactez-nous ici</Link>
         </p>
            </Row>
          </Container>

      )

}

export default FAQ