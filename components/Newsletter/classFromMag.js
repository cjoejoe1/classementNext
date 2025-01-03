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

console.log('tag is', props.tag)

  const thanks = () => {
    if(router.query.l === 'sl') return '/thanks-sl/'
    else return '/classementThanks/'
  }

  const changeEmailHandler = (event) => {
    setEmail(event.target.value)
  }


  const addToDB = async () => {


    const newsignups = await firestore.collection('classement').add({
      emailAddress: email,
      date: new Date(),
      tags: props.tag || 'notag',
    })
    console.log('user added!!')

  //  await firestore.collection('crm').doc(email.replace('@', '_').split('.')[0]).set(data)

  }


  const handleSubmit = async e => {
    e.preventDefault();
    if(email !== '' ){
      
      await addToDB().then(()=> {
        setEmailSent(true)
        console.log('it really is')
        router.push(
          {
              pathname: thanks(),
              query: 
              { 
                email: email
              }
            }
          )
 
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
    {/* {steps()} */}
    <BS.Container style={{marginBottom: 50, paddingLeft: 0, paddingRight: 0}}>
        <div className="Newsletter">
        <h3 style={{textAlign: 'center', fontWeight: 300, marginBottom: 30, marginTop: 30, fontSize: 27}}>Classement {props.tag && props.tag.replaceAll('-', ' ')} 2025</h3>
            <div className="form">
              <form className="subscribe" onSubmit={handleSubmit}>
              <BS.Form.Group className='formit'>
              {/* <BS.Form.Row mx-auto id={props.design || 'newsletter'}> */}
              <div id="newsletter">
         
                  <BS.Form.Control size="lg" value={email} onChange={changeEmailHandler} style={{height: 60, minWidth: 330, boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', maxWidth: '96%'}} id="newsletterEmail" name="EMAIL"
                  type="text" className="subscribe-email" placeholder={props.email || 'email@adresse.fr'} onFocus={e => setEmail('')}/>

                  <BS.Button id={props.buttonDesign || 'comparateurButton'} type="submit" className="btn-lg btn-primary" style={{height: 60, background: '#0074c6', borderColor: '#0074c6', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', fontFamily: 'Montserrat', fontWeight: 500, maxWidth: '96%', marginLeft: 10}}>{props.button || "Je veux le comparatif"} <FaAngleDoubleRight style={{marginTop: -5, marginBottom: -2, fontSize: 24, marginLeft: 10}}/></BS.Button>
       
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