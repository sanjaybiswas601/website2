import React from 'react'
import './Email.css'
import { Navbar,Nav,Container,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Send from '../components/Send'
import { useState } from 'react';


const Email = () => {
    const [state, setState] = useState(false)



  return (
      <div>
    <div>
    <section className='header'>
    <Navbar bg="transparent" expand="lg">
  <Container fluid>
    <Navbar.Brand style={{color:'white'}}>
        LOGO
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
 </Navbar>
 <div className='text-box'>
    <h1>Please Enter Mail Me Button </h1>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
     <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet </p>
     <Button variant="outline-success">More</Button>{"  "}
     <Button variant="outline-success" onClick={()=>setState(!state)}>{state ? 'CLOSE' : 'Mail Me'}</Button>

 </div>

    </section><br></br>
    
    </div><br></br><br></br><br></br>
    <br></br><br></br>
    {state && (<Send/>)}
    
    </div>
 

   
  )
}

export default Email