import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://juniper-server.herokuapp.com/user/login',{
        method: 'POST',
        body: JSON.stringify({email: email, password: password}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) .then(
        (response) => response.json()
    ) .then((data) => {
        console.log(data)
        props.updateToken(data.sessionToken);
    }).catch(err => console.log(err))
}

    return(
        <div>
            <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                    </FormGroup>
                    <Button type="submit">Login</Button>
            </Form>
            </div>
            <div>
            <h4>Need to create an account?</h4>
            
            <a href="/register" >
                <button type="button">Register</button>
            </a>   
            
        </div>
        </div>
    )
}

export default Login;