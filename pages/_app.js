import '../styles/globals.css'
import { GlobalProvider } from "../context/GlobalContext";
import "../node_modules/aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/fonts/icon-font/css/style.css";
function MyApp({ Component, pageProps }) {

  return  (
<>
    <GlobalProvider>
 <Component {...pageProps} />
  </GlobalProvider>
  </>
  )
}

export default MyApp
