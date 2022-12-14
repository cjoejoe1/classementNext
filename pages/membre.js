import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../utils/firebaseData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head'
import Layout from '../components/layout'
// initFirebase();
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      // const userData = await mapUserData(user);
      // setUserCookie(userData);
    }
  }
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/app"
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>Connexion</title>
                <meta name="description" content="
              Connexion à Createur.com" />
      </Head>

      <Header />
    <div style={{marginTop: 250, minHeight: 800}}>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={firebase.auth()}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
    </Layout>
  
  );
};

export default FirebaseAuth;