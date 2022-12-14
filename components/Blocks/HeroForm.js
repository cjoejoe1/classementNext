import React, {useState} from 'react';
import {Button} from "react-bootstrap"
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'
import Newsletter from '../Newsletter'

const HeroForm = (props) => {





  const [values, setValues] = useState({
    name: '',
    telephone: '',
    email: '',
    message: '',
    error: null,
  })

  // async function addToDB(){
          
  //   await firebase.firestore().collection('client').add({
  //     name: values.name,
  //     type: values.type,
  //     email: 'none',
 
  //   })
  //   console.log('it worked!!')
  // }

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    localStorage.setItem('businessName', values.name)
    localStorage.setItem('businessType', values.type)
    // addToDB()
    // navigate('/app/')
    }
    
        return (
        <>
  
              <div >
          
                <h1 id="h1Hero" style={{color: 'white', fontWeight: 800, letterSpacing: -5, marginTop: 10, textAlign: 'left', position: 'relative', zIndex: 10}} >10 Idées Business <span style={{textDecoration: 'underline', textDecorationColor: '#f00057'}}>Par Jour*</span></h1>
                <p id="h3Hero" style={{color: 'white', fontWeight: 300, letterSpacing: -5, marginTop: -10, textAlign: 'left', position: 'relative', zIndex: 10}}><span style={{textDecoration: 'underline', textDecorationColor: '#f00057'}}></span> (*directement par email)</p>
                {/* <h1 id="h1Hero" style={{color: 'white', fontWeight: 800, letterSpacing: -5, marginTop: -20, textAlign: 'left', position: 'relative', zIndex: 10}}>Get More Sales!</h1> */}
               
                <h1 id="h1HeroMob" style={{color: 'white', fontWeight: 800, letterSpacing: -5, marginTop: -50, textAlign: 'left', position: 'relative', zIndex: 10, fontSize: 46}}>10 Idées Business <span style={{textDecoration: 'underline', textDecorationColor: '#f00057'}}>Par Jour*</span></h1>
                <p id="h1HeroMobUnder" style={{color: 'white', fontWeight: 300, letterSpacing: -5, marginTop: -0, textAlign: 'left', position: 'relative', zIndex: 10, fontSize: 46}}><span style={{textDecoration: 'underline', textDecorationColor: '#f00057'}}></span>*directement par emails</p>
                {/* <h1 id="h1HeroMob" style={{color: 'white', fontWeight: 800, letterSpacing: -5, marginTop: -20, textAlign: 'left', position: 'relative', zIndex: 10}}>More Sales!</h1> */}
               
                {/* <p className="heroLine2" style={{textAlign: 'left', marginTop: 20, marginBottom: 10, color: 'white', fontSize: 30, position: 'relative', zIndex: 10}} id='notMobile hand'>Get WAAAS (Web Agency As A Service)</p> */}
              <Newsletter 
                  from='index'
                  form="https://app.convertkit.com/forms/2945089/subscriptions"/>
                {/* <Link href="/start/" passHref>
                <Button id='buttonHover' className="btn-lg btn" style={{fontWeight: 700, marginTop: 30, paddingTop: 12, height: 60, minWidth: 250, background: '#f00057', borderColor: '#f00057'}}>Je m'inscris <span style={{fontSize: 18}}><FaArrowRight /></span>
                  </Button>
                  </Link> */}
              </div>



              {/* <Form id="formMobile" onSubmit={handleSubmit} style={{float: 'left'}}>
                <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                  <Form.Group as={Col} lg="4" style={{minWidth: 310, marginBottom : '1rem'}}>
                    <Form.Control type="text" placeholder="Your business name?" name="name" style={{fontSize: '1.3rem', fontColor: '#495057', height: 60}} value={values.name} onChange={handleChange}>
                  
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} lg="4" style={{minWidth: 310, marginBottom : '1rem'}}>
                    <Form.Control as="select" defaultValue="What do you do?" name="type" value={values.type} onChange={handleChange} style={{fontSize: '1.3rem', height: 60}}>
                    <option value='default'>What do you do?</option>
                    <option value='architect'>Architect</option>
                    <option value='builder'>Builder</option>
                    <option value='cleaner'>Cleaner</option>
                    <option value='plumber'>Plumber</option>
                    </Form.Control>
                  </Form.Group>
                  
                  <Form.Group as={Col} lg="4">
                  <Button id='buttonHover' className="btn-lg btn" type="submit" style={{fontWeight: 700, marginTop: 0, paddingTop: 10, height: 60, width: '100%', minWidth: 300, position: 'relative', zIndex: 10}}>{`Build My Website `} <FontAwesomeIcon icon={faArrowRight} /></Button>
                  </Form.Group>
                  </Row>
              </Form> */}

        </>
     
  )
}
export default HeroForm