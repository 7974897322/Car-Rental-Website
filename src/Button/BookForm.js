import {React } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookForm.css';

const BookForm = () =>{
    return(
        <>
            <h1>Book your Vehicle</h1>
            
        <Container className="book">
            <span><h3>Enter your Details.</h3></span>
            <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phoneNumber" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Adhar Card Number</Form.Label>
                        <Form.Control type="adharCard" placeholder="Adhar Card Number" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Select One--</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                            
                        </Form.Select>
                        </Form.Group>
                        </Row>

                        <Row className="mb-3">
                   
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Select One--</option>
                            <option>Chhattisgarh</option>
                            
                        </Form.Select>
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>--Select One--</option>
                            <option>Bhilai</option>
                            <option>Bilaspur</option>
                            <option>Dongargarh</option>
                            <option>Durg</option>
                            <option>Rajnandgaon</option>
                            <option>Raigarh</option>
                            <option>Raipur</option>
                            
                        </Form.Select>
                        </Form.Group>                     
                    </Row>        
            </Form>

            <Button variant="primary mb-5 mt-5" type="submit">
                     <Link className="btn-1" to="/book/cars">
                        Submit
                    </Link>
                    </Button>

            </Container>
</>
    );
}

export default BookForm;



