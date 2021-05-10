import React, { useEffect } from 'react'
import {Jumbotron,Container,Button} from 'reactstrap'

const Home = () => {
    
    useEffect(() => {
        document.title="Home";
    }, []);
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Learn with arpit</h1>
                <p> This project is developed by Arpit It consists frontedn in React.js and backed is connected using spring 
                    boot and DB used is mysql
                </p>
                <Container>
                    <Button color="primary">start</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home