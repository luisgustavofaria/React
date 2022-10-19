import Head from "next/head"

import Title from '../src/components/title/title'
import Subtitle from '../src/components/subtitle/subtitle'

function HomePage () {
    return (
        <>
            <Head>
                <title>Titulo diferente da HomePage</title>
            </Head>
            <div>            
                <Title>Um tituloooooooooooo</Title>
                <Subtitle text="um subtitleeeeeeeeeee"/>
                <Title>Outro tituloooooooooooo</Title>
                <Subtitle text="outro subtitleeeeeeee"/>       
            </div>
        </>
    )
}

export default HomePage