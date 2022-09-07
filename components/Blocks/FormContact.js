import React, {useState} from 'react';
import * as Bs from "react-bootstrap"
import { Form, Input } from '../common';
import {collection, doc, addDoc} from 'firebase/firestore';
import { database } from '../../utils/firebase';
import navigate from 'next/link'
import { useRouter } from 'next/router'

const ContactBox = (props) => {
  const router = useRouter()
  const [values, setValues] = useState({
    name: '',
    telephone: '',
    email: '',
    message: '',
    error: null,
  })
  let name = 'Stimply'
  let to = 'hello@stimply.com'

      async function addToDB(){
                
          let theSubject = `New Stimply contact`
          let theMessage = `Hi JP, <br><br>You have just received a new message:<br><br><b>Name:</b> ${values.name}<br><br><b>Telephone:</b> ${values.telephone}<br><br><b>Email:</b> ${values.email}<br><br><b>Message:</b> ${values.message}`

          await addDoc(collection(database, "contactsStimply"), {
            source: "stimply",
            to: "jpc@johnpierreclark.com",
            name: values.name,
            telephone: values.telephone,
            email: values.email,
            message: {
              subject: theSubject,
              html: theMessage,
            }
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
        });
          console.log('it worked!!')
        }

        const handleChange = e => {
          setValues({...values, [e.target.name]: e.target.value})
        }

        const handleSubmit = async e => {
          e.preventDefault()
          addToDB()
          router.push('/thank-you-contact/')

          }

        return (
        <Bs.Container id='mobileContactBox' style={{maxWidth: 1280, paddingLeft: 0, paddingRight: 0}}>
          <Bs.Row>
            <Bs.Col style={{backgroundColor: '#fff'}} onSubmit={handleSubmit}>
              <div>
                <h2 style={{color: 'black', marginTop: 10, marginBottom: 50, font: 'bold 2em / 1.2 Montserrat, sans-serif', textAlign: 'center'}}>or, send us a message <span role="img" aria-label="free" id='notMobile'>👋</span></h2>
              </div>
              <Form style={{marginTop: 0, marginLeft: 0, maxWidth: '100%'}}>
                <Input placeholder="name" type="text" name="name" style={{fontSize: '1rem', width: '100%'}}  value={values.name} onChange={handleChange}/>
               
                <Input placeholder="telephone (optional)" type="text" name="telephone"  style={{fontSize: '1rem', width: '100%'}}  value={values.telephone} onChange={handleChange}/>

                <Input placeholder="email" type="text" name="email"  style={{fontSize: '1rem', width: '100%'}}  value={values.email} onChange={handleChange}/>
               
                <Bs.Form.Control as="textarea" placeholder="your message" rows={5} name="message"  style={{fontSize: '1rem', width: '100%'}}  value={values.message} onChange={handleChange}/>
                <Bs.Button className="btn-lg btn" type="submit" block style={{fontWeight: 700, color: '#000', backgroundColor: '#ffcc1a', borderColor: '#ffcc1a', marginTop: 20}}>{`Send >>`}</Bs.Button>
              </Form>
            </Bs.Col>
          </Bs.Row>
        </Bs.Container>

  )
}
export default ContactBox