import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>Lycée Pilote Monastir - LPM</title>
            <link rel="icon" href={"/favicon.ico"} />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>

        <div>
            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp
