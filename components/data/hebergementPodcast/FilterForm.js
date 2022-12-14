import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row } from "react-bootstrap";
import { Title, Button, Section, Box, Text, Input } from "../../Core";
import DataTable from './hebergementPodcast'
import * as Yup from 'yup'



function FilterForm() {

    const [show, setShow] = useState(true)
    const [amo, setAmo] = useState(1)
    const initialValues = {
        amount: '',
    }

    const isShow = (amount) => {
        if(show === true){
            
            console.log(`show is true with ${amo}`)
            
            return(
                <>
                {/* <h2>show is true with {amo}</h2> */}
            <DataTable numMonth={amo}/>
            
            </>
            )
        }
    }
   
    
    const onSubmit = (values) => {

        console.log('values', values)
        
            setAmo(values.amount)
            setShow(true)
        
        // }
    }
    
    const validationSchema = Yup.object({
    
    })
    
    const handleReset = () => {
        setShow(false)
    }


    const [formValues, setFormValues] = useState({
        amount: '',
      })

      function handleInputChange(e) {
        e.persist();
        // setErrorMessage('')
        setFormValues(currentValues => ({
          ...currentValues,
          [e.target.name]: e.target.value
  
        }))
        
        
        console.log('amount', formValues.amount)

      }

      console.log(formValues.amount)

    return (
        <>
        {/* <form id='my-form' onSubmit={handleSubmit}>
            <label htmlFor='amount' style={{color: 'white'}}>How many do you want?</label>
            <input id='titleInput' type='text' name='amount' maxLength = "5" value={formValues.amount} onChange={handleInputChange} />
            <Button type='submit' style={{background: '#e4234f', marginTop: 31, height: 51, marginLeft: 10}} >Submit</Button>
        </form> */}

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           <Form >
               <Row style={{marginLeft: 6}}>
            <Box mb={3}>
               <label htmlFor='amount' style={{color: 'white'}}>How many do you want?</label>
               <Field type='text' id='amount' name='amount'/>
               <ErrorMessage name='amount'/>
               </Box>
            <Box mb={3}>
               <Button type='submit' onClick={handleReset} style={{background: '#e4234f', marginTop: 31, height: 51, marginLeft: 10}}>Je valide</Button>
               </Box>
               </Row>
           </Form>
        </Formik>
        {isShow()}
        </>
    )
}

export default FilterForm
