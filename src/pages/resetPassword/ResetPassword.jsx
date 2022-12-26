import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { resetPasswordAPI } from '../../services/UserService';

const newPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

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
        top: '1vh',
        // border:'1px solid black'
    },
    txtboth: {
        fontSize: '12px',
        fontWeight: '500'
    },
    acc1: {
        display: 'flex',
        position: 'relative',
        top: '5vh',
        height: '26%',
        backgroundColor: '#E4E4E4',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #F9F9F8'
    }
})
function ResetPassword() {
    const classes = useStyle()
    const [resetState, setResetState] = useState({
        newPassword: "",
        confirmPassword: ""
    })
    const [passwordState, setPasswordState] = useState({
        newPasswordBorder: false,
        newPasswordHelper: "",
        confirmPasswordBorder: false,
        confirmPasswordHelper: ""
    })

    const takeNewPassword = (event) => {
        console.log(event.target.value)
        setResetState((prevState) => ({ ...prevState, newPassword: event.target.value }))
    }

    const takeConfirmPassword = (event) => {
        console.log(event.target.value)
        setResetState((prevState) => ({ ...prevState, confirmPassword: event.target.value }))
    }

    const resetSuccess = () => {

        let checkNewPassword = newPasswordRegex.test(resetState.newPassword)
        let checkConfirmPassword = confirmPasswordRegex.test(resetState.confirmPassword)

        if (checkNewPassword === true) {
            setPasswordState((prevState) => ({ ...prevState, newPasswordBorder: false, newPasswordHelper: "" }))
        }
        else {
            setPasswordState((prevState) => ({ ...prevState, newPasswordBorder: true, newPasswordHelper: "Incorrect Password" }))
        }

        if (checkConfirmPassword === true) {
            setPasswordState((prevState) => ({ ...prevState, confirmPasswordBorder: false, confirmPasswordHelper: "" }))
        }
        else {
            setPasswordState((prevState) => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelper: "Incorrect Password" }))
        }

        if (checkNewPassword === true && checkConfirmPassword === true) {
            resetPasswordAPI(resetState)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data)
                })
                .catch((error) => console.log(error))
            console.log('Reset Password SuccessFul')
        }
    }

    const navigate = useNavigate()

    const navSignIn = () => {
        navigate('/')
    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box className={classes.fgttxt}>
                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>Reset Your Password?</Typography>
            </Box>
            <Paper className={classes.forgetBox} elevation={3}>
                <Box className={classes.innerBox}>
                    <Box>
                        <span className={classes.txtboth}>New Password</span>
                        <TextField onChange={takeNewPassword} error={passwordState.newPasswordBorder} helperText={passwordState.newPasswordHelper} fullWidth='true' size='small' style={{ height: '50px' }} />
                    </Box>
                    <Box>
                        <span className={classes.txtboth}>Confirm Password</span>
                        <TextField onChange={takeConfirmPassword} error={passwordState.confirmPasswordBorder} helperText={passwordState.confirmPasswordHelper} fullWidth='true' size='small' style={{ height: '60px' }} />
                    </Box>
                    <Box>
                        <Button variant="contained" fullWidth='true' sx={{ backgroundColor: '#A03037 !important', height: '40px' }} onClick={resetSuccess} >Reset Password</Button>
                    </Box>
                </Box>
                <Box className={classes.acc1}>
                    <Button variant="text" sx={{ height: '40px', fontWeight: '700', fontSize: '15px', color: 'black' }} onClick={navSignIn}>Login Account</Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default ResetPassword;