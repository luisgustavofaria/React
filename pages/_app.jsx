import Head from "next/head"

import "../src/styles.css"

function App ({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Titulo Padrao</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default App