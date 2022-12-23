import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signUpAPI } from '../../services/UserService';

const fullnameRegex = /^([A-Z]{1}[a-z]{2,}$)/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobilenumberRegex=/^([0-9]{10}$)/;

const useStyle=makeStyles({
    // page1:{
    // height:'100vh',  
    // width:'100vw',       
    // backgroundColor:'grey',
    // },
    mainContainer1:{
        display:'flex',
        position:'relative',
        boxSizing:'border-box',
        height:'64vh',
        width:'28vw',        
        bottom:'20px',
    },
    subContainer1:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        alignItems:'center',
        left:'3.5vw',
        height:'100%',
        width:'75%',
    },
    upButtons:{
        display:'flex',
        position:'relative',
        boxSizing:'border-box',
        justifyContent: 'space-between',
        fontWeight:'bolder',
        fontSize:'500px',
        width:'100%', 
        height:'10%', 
        top:'10px' 
    },   
    txtbox1:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box !important',
        top:'2vh',
        rowGap:'3px !important',
        width:'100%',
    },
    txt1:{
        fontSize:'12px',
        fontWeight:'500'
    },
    signBtn1:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        width:'100%',
        top:'4vh',
    },

})

function SignUp(props) {
    const classes=useStyle()
    const [signUpstate, setsignUpState] = useState({
        fullName: "",
        emailId: "",
        password: "",
        mobileNumber: 0,
      })
      const [regexState, setRegexState] = useState({
        fullNameBorder: false,
        fullNameHelper: "",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        mobileNumberBorder: false,
        mobileNumberHelper: ""
      })

    const takeFullName=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState) => ({ ...prevState, fullName: event.target.value }))
    }

    const takeEmail=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState) => ({ ...prevState, emailId: event.target.value }))
    }

    const takePassword=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const takeMobileNo=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState) => ({ ...prevState, mobileNumber: Number(event.target.value) }))
    }
    const signUpSuccess = () => {
        console.log(signUpstate)
    
        let checkFullName = fullnameRegex.test(signUpstate.fullName)
        let checkEmail = emailRegex.test(signUpstate.emailId)
        let checkPassword = passwordRegex.test(signUpstate.password)
        let checkMobileNumber = mobilenumberRegex.test(signUpstate.mobileNumber)
    
        if (checkFullName === true) {
          setRegexState((prevState) => ({ ...prevState, fullNameBorder: false, fullNameHelper: "" }))
        }
        else if (checkFullName === false) {
          setRegexState((prevState) => ({ ...prevState, fullNameBorder: true, fullNameHelper: "Enter a FullName" }))
    
        }
    
        if (checkEmail === true) {
          setRegexState((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (checkEmail === false) {
          setRegexState((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter a correct Email" }))
    
        }
    
        if (checkPassword === true) {
          setRegexState((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        else if (checkPassword === false) {
          setRegexState((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct Password" }))
    
        }
    
        if (checkMobileNumber === true) {
          setRegexState((prevState) => ({ ...prevState, mobileNumberBorder: false, mobileNumberHelper: "" }))
        }
        else if (checkMobileNumber === false) {
          setRegexState((prevState) => ({ ...prevState, mobileNumberBorder: true, mobileNumberHelper: "Enter correct Formatted Mobile Number" }))
        }
    
        if (checkFullName === true && checkEmail === true && checkPassword === true && checkMobileNumber === true) {
          signUpAPI(signUpstate)
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
          console.log('SignUp Successful')         
        }    
      }
    

    const switchSignup1=()=>{
        props.switchSignup()
    }
  return (
    <Box >
        <Paper className={classes.mainContainer1} elevation={3}>
            <Box className={classes.subContainer1}>
                <Box className={classes.upButtons}>
                    <Button variant="text" style={{fontWeight:'600',fontSize:'20px',color:'black'}} onClick={switchSignup1}>LOGIN</Button>
                    <Button variant="text" style={{fontWeight:'600',fontSize:'20px',color:'black'}} >SIGNUP</Button>
                </Box>
                <Box className={classes.txtbox1}>
                    <Box><span className={classes.txt1}>Full Name</span>
                        <TextField onChange={takeFullName} error={regexState.fullNameBorder} helperText={regexState.fullNameHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                    </Box>
                    <Box><span className={classes.txt1}>Email Id</span>
                        <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                    </Box>
                    <Box><span className={classes.txt1}>Password</span>
                        <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                    </Box>
                    <Box><span className={classes.txt1}>Mobile Number</span>
                        <TextField onChange={takeMobileNo} error={regexState.mobileNumberBorder} helperText={regexState.mobileNumberHelper} size='small' fullWidth='true' style={{height:'50px'}}/>
                    </Box>
                </Box>
                <Box className={classes.signBtn1}>                        
                    <Button onClick={signUpSuccess} variant="contained" fullwidth='true' sx={{backgroundColor:'#A03037 !important'}}>SignUp</Button>
                </Box>
            </Box>
        </Paper>
    </Box>
  )
}

export default SignUp;