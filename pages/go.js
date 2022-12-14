import React, {useState, useMemo, useEffect} from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { rgba } from "polished";
import Head from 'next/head'
import { FaSpinner} from 'react-icons/fa'
import { Title, Text } from "../components/Core";
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Seo from "../components/seo";
const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({ theme }) => rgba('black', 0.1)};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;



const Redirect = () => {
  const router = useRouter()

  const go = router.query.go
  const url = router.query.url



  const doPush = () => {
    if (typeof window !== 'undefined') {
      window.location.href = url
    }
    
  }

  url && setTimeout(doPush, 1000)

    
  
const [spinner, setSpinner] = useState('spinnerFalse')
  return (
<>
 <Seo
        title="Veuillez patienter - vous allez être redirigé"
        description="Trouver le meilleur outil pour votre business avec createur.com"
      />
        {/* <Section> */}
            <div className="pt-5"></div>
            <Container>
            <div className="text-center">
             <div style={{marginBottom : 100}}>
                <FaSpinner id="spinner" style={{color: '#e4234f', fontSize: 56, marginBottom: 100}}/>
                </div>
                <div>
                  
         
                <Title variant="hero" id='pleaseWait' style={{textAlign: 'center'}}>Veuillez patienter</Title>
                <Text>
                Vous allez être redirigé vers {go}
                </Text>
         
                </div>
            </div>
            </Container>
        {/* </Section> */}
        </>
  );
};

export default Redirect;