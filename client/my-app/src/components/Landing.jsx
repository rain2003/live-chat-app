/* eslint-disable no-unused-vars */
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Landing() {
    return <center>
    <h1 style={{ marginTop: "200px"}} >Welcome to Real-Time chat!</h1>
    <Card variant="outlined" style={{
        width : '40%',
        display : 'flex',
        flexDirection: 'column-reverse',
        
    }}>
        <Button variant="contained" style={{
            marginTop : '30px',
        }}onClick={()=>{
            window.location = '/signin'
        }}
        >Sign In</Button>
        <Button variant="contained" style={{
            marginTop : '30px',
        }} onClick={()=>{
            window.location = '/signup'
        }}
        >Sign Up</Button>
    </Card>
    </center>
    
}

export default Landing;