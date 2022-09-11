import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render()
    {
        return (
        <Html lang="en">
            <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,800;1,100;1,300;1,500;1,600&display=swap" rel="stylesheet"></link>
        <meta name="facebook-domain-verification" content="cgg6ot1j65djjforxhir374igcqpqa" />
    </Head>
            <body>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD4XDXH"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
            <Main />
            <NextScript />
            </body>
        </Html>

    )}
}