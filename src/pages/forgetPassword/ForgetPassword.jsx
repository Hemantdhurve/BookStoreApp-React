import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { forgetPasswordAPI } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const useStyle = makeStyles({
    fgttxt: {
        position: 'relative',
        top: '20vh',
        fontSize: '30px',
        color: 'black'
    },
    forgetBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '46vh',
        width: '28vw',
        // left:'35vw',
        top: '25vh',
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        // height:'26vh',
        width: '22vw',
        left: '3vw',
        top: '5vh',
        // border:'1px solid black'
    },
    txt: {
        position: 'relative',
        bottom: '5px',
        fontSize: '14px'
    },
    txt1: {
        fontSize: '12px',
        fontWeight: '500'
    },
    acc: {
        display: 'flex',
        position: 'relative',
        top: '9vh',
        height: '26%',
        backgroundColor: '#E4E4E4',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #F9F9F8'
    }
})

function ForgetPassword(props) {
    const classes = useStyle()

    const [forgetState, setForgetState] = useState("")

    const takeEmail = (event) => {
        console.log(event.target.value)
        setForgetState((prevState) => ({ ...prevState, emailId: event.target.value }))
    }

    const navigate = useNavigate()

    const navCreateAcc = () => {
        navigate('/')
    }
    const forgetPassSuccess = (emailId) => {

        let checkEmail = emailRegex.test(forgetState.emailId)

        if (checkEmail === true) {
            forgetPasswordAPI(forgetState.emailId)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data)
                    console.log(response.data.data)
                    props.switchReset()                    
                    navigate('/resetpassword')
                })
                .catch((error) => console.log(error))
            console.log("Token send to the Email Id")
        }

    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Box className={classes.fgttxt}>
                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>Forgot Your Password?</Typography>
            </Box>
            <Paper className={classes.forgetBox} elevation={3}>
                <Box className={classes.innerBox}>
                    <Box>
                        <span className={classes.txt}>Enter your email address and we'll send you a link to reset your password</span>
                    </Box>
                    <Box>
                        <span className={classes.txt1}>Email Id</span>
                        <TextField onChange={takeEmail} fullWidth='true' size='small' style={{ height: '63px' }} />
                    </Box>
                    <Box>
                        <Button variant="contained" fullWidth='true' sx={{ backgroundColor: '#A03037 !important', height: '40px' }} onClick={forgetPassSuccess} >Reset Password</Button>
                    </Box>
                </Box>
                <Box className={classes.acc}>
                    <Button variant="text" sx={{ height: '40px', fontWeight: '700', fontSize: '15px', color: 'black' }} onClick={navCreateAcc} >Create Account</Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default ForgetPassword;