import Header from '../src/components/header/header.jsx'
import Title from '../src/components/title/title'
import Subtitle from '../src/components/subtitle/subtitle'

function OutroExemplo () {
    return (
        <>
           <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
                <Title>Outro Café Dev</Title>
                <Subtitle text="O segundo melhor cafe"/>
            </Header> 
        </>
    )
}

export default OutroExemplo