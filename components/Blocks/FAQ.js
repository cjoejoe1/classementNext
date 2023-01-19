import React from 'react';
import Link from 'next/link';
import {Container, Row, Col} from "react-bootstrap"


const FAQ = (props) => {


        return (
          <Container style={{margin: 'auto', marginTop: 100, marginBottom: 80, maxWidth: 800 }}>
              <h2 className="display-4" style={{textAlign: 'center', margin: 'auto', marginBottom: 100, fontWeight: 700, fontSize: 30, maxWidth: 600}} >Questions - Réponses</h2>
         <h4 style={{textAlign: 'left', marginBottom: 20, fontWeight: 800, fontSize: 20, marginTop: 60}}>Classement.com, c’est gratuit ?</h4>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Oui! L’inscription à Classement est gratuite pour toujours. Vous allez votre comparatif et vos offres promos par email pour aussi longtemps que vous le souhaitez.</p>
          <h4 style={{textAlign: 'left', marginBottom: 20, fontWeight: 800, fontSize: 20}}>Je vais recevoir combien d’email ?</h4>
            <p className="lead" style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Vous allez recevoir 1 email par jour. Votre adresse email vous permettra aussi de vous connecter à votre espace personnel où tous vos comparatifs seront listés.</p>
         

        <h4 style={{textAlign: 'left', marginBottom: 20, fontWeight: 800, fontSize: 20}}>Pouvez-vous m’aider sur un projet personnel ?</h4>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Réponse courte: oui, mais on ne pourra pas aider tout le monde. N’hésitez pas à envoyer vos questions par email. Plus votre question est précise, plus notre réponse sera pertinente.</p>
        <h4 style={{textAlign: 'left', marginBottom: 20, fontWeight: 800, fontSize: 20}}>J’ai utilisé Classement.com pour trouver mon produit. Comment vous remercier ?</h4>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 50}}>Nous sommes très heureux d’avoir pu vous inspirer! N’hésitez pas à partager Classement.com avec vos amis et de poster un avis en ligne.</p>
         

   <h4 style={{textAlign: 'left', marginBottom: 20, fontWeight: 800, fontSize: 20}}>J’ai trouvé tous les produits qu’il me faut. Comment me désinscrire ?</h4>
                <p className={"lead"} style={{textAlign: 'left', margin: 'auto', marginBottom: 0}}>Cliquez tout simplement sur désinscription en base votre email de Classement.com.</p>
          
   

            <Row style={{maxWidth: 300, margin: 'auto', marginTop: 50}}>

         <p style={{textAlign: "center"}}>Vous n'avez pas trouvé votre réponse ?<br></br>
         <Link href="/contactez-nous/">Contactez-nous ici</Link>
         </p>
            </Row>
          </Container>

      )

}

export default FAQ