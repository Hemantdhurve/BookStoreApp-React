import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const useStyle=makeStyles({
    page:{
        height:'100vh',        
        backgroundColor:'lightgrey',
    },
    mainContainer:{
        display:'flex',
        position:'relative',
        boxSizing:'border-box',
        height:'64vh',
        width:'28vw',
        left:'50vw',
        top:'18vh',
    },
    subContainer:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        alignItems:'center',
        left:'3.5vw',
        height:'100%',
        width:'75%'
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
    txtbox:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        top:'2.5vh',
        height:'22vh',
        width:'100%',
    },
    
    txt:{
        fontSize:'10px',
        fontWeight:'500'
    },
    pass:{
        position:'relative',
        top:'2vh'
    },
   
    passBtn:{
        display:'flex',
        position:'relative',
        boxSizing:'border-box',
        top:'3vh',
        left:'6vw',
        height:'14px',

    },
    loginBtn:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        boxSizing:'border-box',
        width:'100%',
        top:'7vh',
    },
    txtOR:{
        position:'relative',
        top:'9vh',
        fontWeight:'700',
    },
    twoBtn:{
        position:'relative',
        display:'flex',
        top:'11vh',
        justifyContent:'space-between',
        width:'100%'
    },
    fb:{
        width:'48%'
    },
    google:{
        width:'48%',
    }
})

function SignIn() {
    const classes=useStyle()
  return (
        <Box className={classes.page}>
            <Paper className={classes.mainContainer} elevation={3}>
                <Box className={classes.subContainer}>
                    <Box className={classes.upButtons}>
                        <Button variant="text" style={{fontWeight:'600',fontSize:'20px',color:'black'}} >LOGIN</Button>
                        <Button variant="text" style={{fontWeight:'600',fontSize:'20px',color:'black'}} >SIGNUP</Button>
                    </Box>
                    <Box className={classes.txtbox}>
                        <Box><span className={classes.txt}>Email Id</span>
                            <TextField variant="outlined" size='small' fullWidth='true'/>
                        </Box>
                        <Box className={classes.pass}><span className={classes.txt}>Password</span>
                            <TextField variant="outlined" size='small' fullWidth='true'/>
                        </Box>
                    </Box>
                    <Box className={classes.passBtn}>
                        <Button variant="text" size='small' style={{fontWeight:'100',fontSize:'10px',color:'black'}} >Forget Password?</Button>
                    </Box>
                    <Box className={classes.loginBtn}>                        
                        <Button variant="contained" sx={{backgroundColor:'#A03037 !important'}} fullwidth='bool'>Login</Button>
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