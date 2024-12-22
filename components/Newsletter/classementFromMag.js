import React, { useState, useContext} from 'react'
import * as BS from "react-bootstrap"

import cats from '../data/classement/cat.json'
import { firestore, firebase } from "../../utils/firebaseData"
import { useRouter } from 'next/router'
import {FaAngleDoubleRight} from 'react-icons/fa'

const Newsletter = (props) => {
//   const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('')
  const [sent] = useState(false)
  const [message] = useState('')
  const router = useRouter()
  const changeEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  // const [cat, setCat] = useQueryParam("cat", StringParam);
 const cat = 'aspirateur'
  console.log('cat', cat)

  console.log('query is', props.tag)
  // const db = firebase.firestore();

  let ca = cats.find(Category => Category.Url === cat)
  console.log('ca', ca)
  let categ = ''
  
  if(cats.find(Category => Category.Url === cat)){
    categ = ca['Category']
  }


  

  const addToDB = async () => {
    firestore.collection('classement').add({
      email: email,
      date: new Date(),
      tag: categ || 'notag',
    })
    console.log('it worked!!')
  }

  // useEffect(() => {
  //   localStorage.setItem('email', JSON.stringify(email))
  // }, [email])

  const handleSubmit = e => {
    e.preventDefault();
    // setMessage('Thank you for joining! Please check your inbox for your #1 spreadsheet')
    if(email !== '' ){

      addToDB().then(()=> {
        console.log('it really is')
        router.push('/classementThanks/')
        // window.location.href = '/thanks/dark-kitchen/'

      })
     
      
    }
  }
  
  const [shake, setShake] = useState(true);
    
  const animate = () => {
      
      // Button begins to shake
      setShake(true);
      
      // Buttons tops to shake after 2 seconds
      setTimeout(() => setShake(false));
      
  }

    return (
      <>
      <BS.Container style={{marginBottom: 50}}>
      <div className="Newsletter">
    
          <h2>{message}</h2>
   
          {sent ?
          <div></div> :
          <div className="form">
            <form className="subscribe" onSubmit={handleSubmit}>
            <BS.Form.Group className='formit'>
            <BS.Form.Row mx-auto id='newsletter'>
              <BS.Col md={6}>
                <BS.Form.Control size="lg" value={email} onChange={changeEmailHandler} style={{padding: 26, width: 310, marginLeft: -15, height: 60}} id="newsletterEmail" name="EMAIL"
                type="text" className="subscribe-email" placeholder={props.email || 'john@monemail.com'} onFocus={e => setEmail('')}/>
              </BS.Col> 
              <BS.Col md={6} className={shake ? null : 'shake'} id='newsletterButton'>
                <BS.Button id="comparateurButton" type="submit" className="btn-lg btn-primary" style={{height: 60, background: '#e5224f', borderColor: '#e5224f'}}>{props.button || "Recevez Votre Rapport Gratuit "} <FaAngleDoubleRight style={{marginTop: 5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></BS.Button>
              </BS.Col>
        
            </BS.Form.Row>
            </BS.Form.Group>
            </form>
          </div>}

      </div>
      </BS.Container>
      </>
    )
}

export default Newsletter