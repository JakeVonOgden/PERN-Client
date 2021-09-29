import React, {useState} from 'react';

import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import './Register.css';
import APIURL from '../../helpers/environment';

const Register = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [successCheck, setSuccessCheck] = useState(false);
    const [password, setPassword] = useState('');
    const passwordEx = /^[A-Za-z_0-9_!@#$%^&* .]{5,30}$/
    const emailEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passAlert = () => {
        alert("Oops! password must contain at least 5 characters")
      }
      const mailAlert = () => {
        alert (
            "Oops! --> "
            + '' + '' + '' +
            "email format invalid --> Try "
            + '' + '' + ''
            +
            "Anything @ Anything . Anything"
        )
      }

    const sendAccount = () => { 
        if (successCheck === true) {
        setTimeout(function (){
            window.location.href = "./account";
        }, 1000);
        }
    }


const handleSubmit = (event) => {
    if (passwordEx.test(password) !== true) {return passAlert()};
    if (emailEx.test(email) !== true) {return mailAlert()};
    event.preventDefault();
    
    fetch(`${APIURL}user/register`, {
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
            <Form onSubmit={function(event){ handleSubmit(event); sendAccount()}}>
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
                


                <Button type="submit">Register</Button>

            </Form>
            <hr />
            Already registered?  
<a href="/login">Log In</a>
                
            
            
        </Container>
        </div>
    )
    }

export default Register;