import '../styles/globals.css'
import { GlobalProvider } from "../context/GlobalContext";
import "../node_modules/aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/fonts/icon-font/css/style.css";
function MyApp({ Component, pageProps }) {

  return  (
<> 
<Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TD4XDXH');
      `}
    </Script>
    <GlobalProvider>
 <Component {...pageProps} />
  </GlobalProvider>
  </>
  )
}

export default MyApp
