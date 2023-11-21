import React from "react";
import { Button,Container } from "bootstrap";
import "../styles/auth.css";

const Home=()=>{
    return (
     <Container>
<h1>Welcome to our nano url</h1>
<p>we are here to serve you as your need </p>

<Button variant='primary' type='submit'>Get started</Button>
     </Container>
     )
}

export default Home;