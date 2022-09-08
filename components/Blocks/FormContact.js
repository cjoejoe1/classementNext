import React, {useState} from 'react';
import * as Bs from "react-bootstrap"
import { Form, Input } from '../common';
import {collection, doc, addDoc} from 'firebase/firestore';
import { database } from '../../utils/firebase';
import navigate from 'next/link'
import { useRouter } from 'next/router'

const ContactBox = (props) => {
  const router = useRouter()
  const [what, setWhat] = useState('')
  const [website, setWebsite] = useState('')

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    what: what,
    website: website,
    error: null,
  })



  let name = 'Stimply'
  let to = 'hello@stimply.com'

      async function addToDB(){
                
          let theSubject = `New Stimply contact`
          let theMessage = `Hi JP, <br><br>You have just received a new message:<br><br><b>First Name:</b> ${values.firstName}<br><br><b>Last Name:</b> ${values.lastName}<br><br><b>Telephone:</b> ${values.telephone}<br><br><b>Email:</b> ${values.email}<br><br><b>What:</b> ${values.what}<br><br><b>Website:</b> ${values.website}`

          await addDoc(collection(database, "contactsStimply"), {
            source: "stimply",
            to: "jpc@johnpierreclark.com",
            firstName: values.firstName,
            lastName: values.lastName,
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
          const handleWhat = (e) => {
            console.log('e', e)
            setValues({...values, what: e})
          }
          const handleWebsite = (e) => {
            setValues({...values, website: e})
          }
        
          const handleBoolean = () => {
            props.setDropDown(!props.dropDown)
          }
        return (
        <Bs.Container id='mobileContactBox' style={{maxWidth: 1280, paddingLeft: 0, paddingRight: 0}}>
          <Bs.Row>
            <Bs.Col style={{backgroundColor: '#fff'}} onSubmit={handleSubmit}>
      
              <Form style={{marginTop: 0, marginLeft: 0, maxWidth: '100%'}}>
                <Bs.Row>
                <Bs.Col style={{minWidth: 300}}><Input placeholder="First Name" type="text" name="firstName" style={{fontSize: '1rem', width: '100%', borderColor: '#6c757d'}}  value={values.firstName} onChange={handleChange}/></Bs.Col>
                <Bs.Col style={{minWidth: 300}}><Input placeholder="Last Name" type="text" name="lastName" style={{fontSize: '1rem', width: '100%', borderColor: '#6c757d'}}  value={values.lastName} onChange={handleChange}/></Bs.Col>
                </Bs.Row>
                <Bs.Row>
                  <Bs.Col style={{minWidth: 300}}>    <Input placeholder="Telephone" type="text" name="telephone"  style={{fontSize: '1rem', width: '100%', borderColor: '#6c757d'}}  value={values.telephone} onChange={handleChange}/></Bs.Col>
                  <Bs.Col style={{minWidth: 300}}>    <Input placeholder="Email" type="text" name="email"  style={{fontSize: '1rem', width: '100%', borderColor: '#6c757d'}}  value={values.email} onChange={handleChange}/></Bs.Col>
                </Bs.Row>

                <Bs.Dropdown onSelect={handleWhat}>
                <Bs.Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{width: '100%', textAlign: 'left', height: 60}}>What do you do?
                </Bs.Dropdown.Toggle>
                <Bs.Dropdown.Menu>
                  <Bs.Dropdown.Item eventKey='trade'>Trade</Bs.Dropdown.Item>
                  <Bs.Dropdown.Item eventKey='localshop' active={false}>Local shop</Bs.Dropdown.Item>
                </Bs.Dropdown.Menu>
                </Bs.Dropdown>
     
              <Bs.Dropdown onSelect={handleWebsite} style={{marginTop: 10}}>
                            <Bs.Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{width: '100%', textAlign: 'left', height: 60}}>Do you already have a website?
                            </Bs.Dropdown.Toggle>
                            <Bs.Dropdown.Menu>
                              <Bs.Dropdown.Item eventKey='yes'>Yes</Bs.Dropdown.Item>
                              <Bs.Dropdown.Item eventKey='no' active={false}>No</Bs.Dropdown.Item>
                            </Bs.Dropdown.Menu>
                            </Bs.Dropdown>

                
              
                <Bs.Button className="btn-lg btn" variant="primary" type="submit" block style={{marginTop: 20, height: 60, width: '100%'}}>{`Please call me back >>`}</Bs.Button>
              </Form>
            </Bs.Col>
          </Bs.Row>
        </Bs.Container>

  )
}
export default ContactBox