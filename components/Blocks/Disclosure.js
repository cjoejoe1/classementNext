import React, { useState } from 'react';
import { Row, Modal, Button } from "react-bootstrap";
function Disclosure() {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <>
        <Modal show={show} onHide={handleClose}>

        <Modal.Body style={{fontWeight: 300, fontFamily: 'arial', fontSize: 14}}>
La partie comparatif sur Createur.com a été lancée pour aider les créateurs et entreprises à comparer et choisir les meilleures offres en ligne. Nous comparons et classons
 une liste non exhaustive de produits et services. Cette application est complètement gratuite et est rendue possible grâce à la publicité. Nous acceptons une rémunération
  de certaines entreprises qui apparaissent sur ce site. Ceci peut impacter l’ordre dans laquelle les marques sont montrées ainsi que leur score. Si vous cliquez sur un lien
   et que vous entrez dans une relation commerciale avec une société, nous pouvons recevoir une commission en échange de la mise en relation. Cependant, ceci n’a aucun 
    supplémentaire pour le client. Nous faisons de notre mieux pour nous assurer que toutes les informations présentes sur le site sont à jour, cependant les données peuvent
     différer de la réalité entre chaque mise à jour du site. N’hésitez pas à consulter nos <a href='https://www.createur.com/mentions-legales/' target='_blank' rel="noreferrer">mentions légales</a> ou <a href='https://www.createur.com/contactez-nous/' target='_blank' rel="noreferrer">nous contacter</a> directement si vous avez la moindre question.

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose} style={{borderColor: 'rgb(229, 35, 79)', backgroundColor:'rgb(229, 35, 79)'}}>
    Fermer
  </Button>
</Modal.Footer>
</Modal>          
{/* <Row style={{maxWidth: 1230, margin: 'auto', color: 'white', fontWeight: 300, fontSize: 14, fontFamily: 'arial'}}> */}
<Row id='disclosure'>
  <div onClick={handleShow} style={{cursor: 'pointer', textAlign: 'right', marginRight: 32, marginLeft: -25}} id='modalOpen'><span style={{textAlign: 'right'}}>Nous recevons une commission | 
  Mention annonceur</span></div>

  </Row>
  </>
    )
}

export default Disclosure
