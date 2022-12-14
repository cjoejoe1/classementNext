import React, { useState, useContext} from 'react'
import * as BS from "react-bootstrap"

import { FaAngleDoubleRight} from 'react-icons/fa'
import { firestore, firebase } from "../../utils/firebaseData"
import { useRouter } from 'next/router'

const Newsletter = (props) => {
//   const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [sent] = useState(false)
  const [message] = useState('')
  const router = useRouter()

console.log('email is', email)

  const thanks = () => {
    if(router.query.l === 'sl') return '/thanks-sl/'
    else return '/merci/'
  }

  const changeEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const addToDB = async () => {
   

    await firestore.collection('newStart').doc(email).set({
       emailAddress: email,
       date: new Date(),
       tags: props.tags || 'createur',
       from: props.from || 'createur'
     })
     console.log('it worked!!')
   }

  const addToDBOld = async () => {

  // // // REGISTER USER
  // const credential = await firebase.auth().createUserWithEmailAndPassword(email, 'password')
  // .catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   if (errorCode === 'auth/weak-password') {
  //     alert('The password is too weak.');
  //     // event.persist();
  //   } else {
  //     alert(errorMessage);
  //     // event.persist();
  //   }
  //   console.log(error);
  // });

  // ADD TO DATBASE

  // const { uid, email } = await credential.user



  //  await firestore.collection('crm').doc(email.replace('@', '_').split('.')[0]).set(data)

  }

  const subscribe = async () => {
    console.log('i am here')
    const res = await fetch(`/api/subscribe?email=${email}`)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    addToDB()
    subscribe()
    router.push('/merci/')
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
    {/* {steps()} */}
    <BS.Container style={{marginBottom: 50, maxWidth: 1248, paddingLeft: 0, paddingRight: 0}}>
        <div id={props.design || 'newsletter'}>
      
            <div className="form">
              <form className="subscribe" onSubmit={handleSubmit}>
              <BS.Form.Group className='formit'>
              {/* <BS.Form.Row mx-auto id={props.design || 'newsletter'}> */}
              <div id="newsletter">
         
                  <BS.Form.Control size="lg" value={email} onChange={changeEmailHandler} style={{height: 60, minWidth: 330, boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat'}} id="newsletterEmail" name="EMAIL"
                  type="text" className="subscribe-email" placeholder={'indiquez votre email...'} onFocus={e => setEmail('')}/>

                  <BS.Button id={props.buttonDesign || 'comparateurButton'} type="submit" className="btn-lg btn-primary" style={{minWidth: 200, height: 60, background: '#e5224f', borderColor: '#e5224f', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500}}>{"Je m'inscris"} <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></BS.Button>
       
                </div>
              {/* </BS.Form.Row> */}
              </BS.Form.Group>
              </form>
            </div>
             
  
        </div>
        </BS.Container>
    
      </>
    )
}

export default Newsletter

const data = {
  "columnOrder": [
      "column1",
      "column2",
      "column3",
      "column4"
  ],
  "title": "To Contactod",
  "prospectFields": {
      // "codigoPostal": {
      //     "systemName": "codigoPostal",
      //     "type": "text",
      //     "displayName": "Codigo postal"
      // },
      // "presupuesto": {
      //     "systemName": "presupuesto",
      //     "displayName": "Presupuesto",
      //     "type": "text"
      // },
      // "direccion": {
      //     "type": "text",
      //     "displayName": "Direccion",
      //     "systemName": "direccion"
      // }
  },
  "reminderCustomActions": {
      // "enviarPresupuesto": {
      //     "displayName": "Enviar presupuesto",
      //     "systemName": "enviarPresupuesto"
      // },
      // "presupusto": {
      //     "displayName": "Presupusto",
      //     "systemName": "presupusto"
      // },
      // "sayHi": {
      //     "systemName": "sayHi",
      //     "displayName": "say hi"
      // },
      // "frfre": {
      //     "displayName": "frfre",
      //     "systemName": "frfre"
      // }
  },
  "columns": {
      "column3": {
          "prospects": [],
          "id": "column3",
          "title": "Pitch Sent"
      },
      "column2": {
          "title": "Connection Made",
          "id": "column2",
          "prospects": []
      },
      "column1": {
          "prospects": [
              "2JS4jwGlH4iyw5g7jPh0",
              "VnLPwwH9g3r6DMHIZ4DR",
              "l7ba9uNwlfCuFgfPhqDu",
              "8WzbFMHMjruPSqXHFiAI",
              "Nq73xRTkeJgX6dcka24q",
              "D2FAEiOenbX2mkpahkg5",
              "PLqG3sazOd7tD6iEKugA",
              "EjWjvqRLlbJS0PHzYJgR",
              "SV0JJOgr7J0oC35EbMAf",
              "MktAyT8oBX7qdEgMtEG8",
              "T71wqOzhfrPDOFDzyf8d",
              "3Iy92JsXjtExC09CoWzD",
              "2LrnMfJhskKFHhcVEUau",
              "59KamVhGQhYhimTpJggO",
              "21lI1t07KWIoNTupLMfu",
              "N7ctzth1yIfPZAtB8djF",
              "CJ4LGVgaEfM5ZjFoBlsl",
              "FhFkerqsjonPPGBV44Ki",
              "DQZQZ0hidVA3o8NB1DTD",
              "HdyEGmSsaDnDAFn98CW0",
              "M65ydwRVEEksK1D6KYmS",
              "OWLRSb2M5eGYIplqL2FV",
              "OvFtwyNq43rm0CLT801N",
              "RTuMEpyu0gUYIWt2BH53",
              "Rpf02B1N5Hk3halGTuqz",
              "bgk0IzmrKa2E2GmOiwdc",
              "dMqspjd7a24lzfY6aJUT",
              "UpCxHrtl9Q71XeMvC5Mh",
              "ShdjzGXZE13iITXp4Qrb",
              "UgG73qZzWAlF7LvtIxun",
              "WQQ6MNdQSrgFjrMJUqdL",
              "aFYqv5nrJLybupj6rQX4",
              "gye0rDQ5AtDhbEmIBr5C",
              "h0qTE7l8QI9k3RvQUkeZ",
              "hGYEBuOcLsV4B9SkUGWo",
              "hn2EluAvpaKJA8P1zDX6",
              "jEUCy2dZRT5FN4QqiTpx",
              "jg2pA8JBJnJ9VzTR0tuE",
              "lqAy6q4amyZqAdud7Ub3",
              "mnVXDCxA3IeP5tNkcpip",
              "nEtAdTpUwqTbb7Zt3gb3",
              "pZymhdPCTsg8WDGm5CUO",
              "sqY0Fumk8EuLH9kTUGXY",
              "szWb4anLPlgI3AANw8V9",
              "tDoeKWYfXZvPuY986c4R",
              "uRnv8eXdpvwivEQZ0Nio",
              "cT8vQSMLTnQIKR5gU0Op",
              "ufSTYR7958zreU2o4MTq",
              "wMIZkNvg6pGF5871Bifq",
              "grLsM60akXwVC7fPovOX",
              "wz1JSnRcj5GumBH9cSId"
          ],
          title: 'Investors To Contact',
          "id": "column1"
      },
      "column4": {
          "prospects": [],
          "id": "column4",
          "title": "Call scheduled"
      }
  }
}