/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
function Register() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    return <div>
    <div style={{
        marginTop : 90 ,
        display : 'flex',
        justifyContent : 'center',
    }}>
    
    <h1 >Welcome to Chat app!</h1>
    </div>
    <div style={{
        display : 'flex',
        justifyContent : 'center',
        padding : 20,
        height : "250px",
    }}>
    <Card variant="outlined" style={{
        width : '30%',
        padding: 20,
        display : 'flex',
        flexDirection : 'column'
        }}>
            
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{
                setPassword (e.target.value);
            }}/>
        <br />
        
        <Button variant="contained" style={{
            marginTop : '30px',
            width : 'fit-content'
        }}
        onClick={()=>{
            fetch("http://localhost:5001/register" ,{
                method : "POST",
                body : JSON.stringify({
                    username : email,
                    password : password
                }),
                headers : {
                    "Content-type" : "application/json"
                }
            }).then((res)=>{
                res.json().then((data)=>{
                    window.location = "/socket"
                    localStorage.setItem("token" ,data.token)
                })
            })
        }}
        >Sign Up</Button>
    </Card>
    </div>
</div>
}

export default Register;