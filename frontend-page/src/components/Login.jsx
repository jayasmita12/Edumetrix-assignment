import React from 'react'
import "../styles/navbar.css"
import { FormControl, FormLabel, Heading, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export const Login = ({ updateloginStatus, email, setEmail, password, setPassword, alerting, setalert }) => {

    return (
        <div className='login-form'>
            <FormControl >
                <Heading style={{ marginBottom: "20px" }}>Login Form</Heading>
                {alerting ? <Alert status='error'>
                    <AlertIcon />
                    Error:Invalid email format
                </Alert> : null}
                <FormLabel>* Email address</FormLabel>
                <Input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                <FormLabel>* Password</FormLabel>
                <Input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"/>
                <Button style={{ marginTop: "20px" }} onClick={updateloginStatus} colorScheme='teal'>Login</Button>
            </FormControl>
        </div>
    )
}
