import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Register.css';

const Register = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://juniper-server.herokuapp.com/user/register", {
        method: 'POST',
        body: JSON.stringify({email: email, firstName: firstName, lastName: lastName, password: password}),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    
    }).then(
        (response) => response.json()
    ).then((data) => {
        console.log(data);
        let token = data.sessionToken;
        // localStorage.setItem('SessionToken', token);
        props.updateToken(data.sessionToken)
    }).catch ((err) => console.log(err))
}
    return(
        <div>
        
            <h1>Register for an Account</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) =>setFirstName(e.target.value)} name="firstName" value={firstName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) =>setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>
            <h4>Already registered?</h4>
            
            {/* <Link to="/login" updateToken={props.updateToken}>
                <button type="button">
                    Log In
                </button>
            </Link> */}
        </div>
    )
    }

export default Register;