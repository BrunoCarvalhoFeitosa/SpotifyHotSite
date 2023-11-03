import Head from "next/head"
import favicon from "../public/favicon.ico"
import "../styles/Globals/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
       <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bruno Carvalho Feitosa" />
        <meta name="description" content="Spotify, música com qualidade para todos." />
        <meta name="theme-color" content="#43CD80" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon.src}/>
        <title>Spotify - Música para todos</title>
      </Head> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
