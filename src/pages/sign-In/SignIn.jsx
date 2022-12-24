import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signInAPI} from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyle = makeStyles({
    // page:{
    //     height:'100vh',
    //     width:'100vw',        
    //     backgroundColor:'lightgrey',
    // },
    mainContainer: {
        display: 'flex',
        position: 'relative',
        boxSizing: 'border-box',
        height: '64vh',
        width: '28vw',
        bottom: '20px',
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        alignItems: 'center',
        left: '3.5vw',
        height: '100%',
        width: '75%',
    },
    upButtons: {
        display: 'flex',
        position: 'relative',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        fontWeight: 'bolder',
        fontSize: '500px',
        width: '100%',
        height: '10%',
        top: '10px'
    },
    txtbox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '2.5vh',
        height: '22vh',
        width: '100%',
    },

    txt: {
        fontSize: '12px',
        fontWeight: '500'
    },
    pass: {
        position: 'relative',
        top: '2.5vh',
    },

    passBtn: {
        display: 'flex',
        position: 'relative',
        boxSizing: 'border-box',
        top: '3vh',
        left: '6vw',
        height: '14px',

    },
    loginBtn: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        top: '7vh',
    },
    txtOR: {
        position: 'relative',
        top: '11vh',
        fontWeight: '700',
    },
    twoBtn: {
        position: 'relative',
        display: 'flex',
        top: '14vh',
        justifyContent: 'space-between',
        width: '100%'
    },
    fb: {
        width: '48%'
    },
    google: {
        width: '48%',
    }
})

function SignIn(props) {
    const classes = useStyle()

    const [logInstate, setlogInstate] = useState({
        emailId: "",
        password: ""
    })
    const [regexState, setRegexState] = useState({
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: ""
    })

    const takeEmail = (event) => {
        console.log(event.target.value)
        setlogInstate((prevState) => ({ ...prevState, emailId: event.target.value }))
    }

    const takePassword = (event) => {
        console.log(event.target.value)
        setlogInstate((prevState) => ({ ...prevState, password: event.target.value }))
    }


    const logInSuccess = () => {

        let checkEmail = emailRegex.test(logInstate.emailId)
        let checkPassword = passwordRegex.test(logInstate.password)

        if (checkEmail === true) {
            setRegexState((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if(checkEmail=== false){
            setRegexState((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Correct Email" }))
        }

        if (checkPassword === true) {
            setRegexState((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        else if(checkPassword===false){
            setRegexState((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter Correct Password" }))
        }

        if(checkEmail===true && checkPassword===true){
            signInAPI(logInstate)
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))
            console.log('Login SuccessFul')
        }

    }

    const switchLogin1 = () => {
        props.switchLogin()
    }

    const navigate = useNavigate()

    const navForget=()=>{
        navigate('/dashboard2')
    }
    return (
        <Box>
            <Paper className={classes.mainContainer} elevation={3}>
                <Box className={classes.subContainer}>
                    <Box className={classes.upButtons}>
                        <Button variant="text" style={{ fontWeight: '600', fontSize: '20px', color: 'black' }} >LOGIN</Button>
                        <Button variant="text" style={{ fontWeight: '600', fontSize: '20px', color: 'black' }} onClick={switchLogin1} >SIGNUP</Button>
                    </Box>
                    <Box className={classes.txtbox}>
                        <Box><span className={classes.txt}>Email Id</span>
                            <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                        </Box>
                        <Box className={classes.pass}><span className={classes.txt}>Password</span>
                            <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                        </Box>
                    </Box>
                    <Box className={classes.passBtn}>
                        <Button variant="text" size='small' style={{ fontWeight: '100', fontSize: '10px', color: 'black' }} onClick={navForget} >Forget Password?</Button>
                    </Box>
                    <Box className={classes.loginBtn}>
                        <Button variant="contained" sx={{ backgroundColor: '#A03037 !important' }} onClick={logInSuccess} fullwidth='bool'>Login</Button>
                    </Box>
                    <Box className={classes.txtOR}>OR</Box>
                    <Box className={classes.twoBtn}>
                        <Button variant="contained" className={classes.fb} >Facebook</Button>
                        <Button variant="outlined" className={classes.google}>Google</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default SignIn;