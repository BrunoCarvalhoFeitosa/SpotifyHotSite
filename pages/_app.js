import Head from "next/head"
import favicon from "../public/fav.png"
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
        <link rel="icon" type="image/png" sizes="16x16" href={favicon.src}/>
        <title>Spotify - Música para todos</title>
      </Head> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
