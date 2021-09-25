import React, {useState} from 'react';

import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import './Register.css';

const Register = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




const handleSubmit = (event) => {
    // console.log("hello submit")
    event.preventDefault();
    
    fetch("https://juniper-server.herokuapp.com/user/register", {
        method: 'POST',
        body: JSON.stringify({email: email, firstName: firstName, lastName: lastName, password: password}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    
    }).then(
        (response) => response.json()
    ).then((data) => {
        console.log("hello", data.user.sessionToken);
        // let token = data.user.sessionToken;

        props.updateToken(data.user.sessionToken)
    })
    .catch ((err) => console.log(err));
    
}
    return(
        <div>
       <Container className='register'>
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
                <br /> 
                
<<<<<<< HEAD
                <Button variant="link" type="submit" >Register</Button>
=======
                <Button type="submit">Register</Button>
>>>>>>> 87fb5dcbc160e778a01adfe1ec4d54931c83ebeb
            </Form>
            <hr />
            Already registered?  
<a href="/login">Log In</a>
                
            
            
        </Container>
        </div>
    )
    }

export default Register;