import { useState } from "react"
import Head from "next/head"

import Title from '../src/components/title/title'
import Subtitle from '../src/components/subtitle/subtitle'
import Button from "../src/components/button/button"

function HomePage () {

    const [click, setClick] = useState(0)

    const handCLick = () => {
        setClick(click + 1)
    }

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
                <Button
                    onCLick={handCLick}
                >
                    Botão teste
                </Button>
                <p>Cliques: {click}</p>       
            </div>
        </>
    )
}

export default HomePage