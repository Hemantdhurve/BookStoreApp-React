import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
        boxSizing:'border-box',
        top:'2.5vh',
        rowGap:'4px !important',
        width:'100%',
    },
    txt1:{
        fontSize:'10px',
        fontWeight:'500'
    },
    signBtn1:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        width:'100%',
        top:'6vh',
    }

})
function SignUp(props) {
    const classes=useStyle()
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
                        <TextField variant="outlined" size='small' fullWidth='true'/>
                    </Box>
                    <Box><span className={classes.txt1}>Email Id</span>
                        <TextField variant="outlined" size='small' fullWidth='true'/>
                    </Box>
                    <Box><span className={classes.txt1}>Password</span>
                        <TextField variant="outlined" size='small' fullWidth='true'/>
                    </Box>
                    <Box><span className={classes.txt1}>Mobile Number</span>
                        <TextField variant="outlined" size='small' fullWidth='true'/>
                    </Box>
                </Box>
                <Box className={classes.signBtn1}>                        
                    <Button variant="contained" fullwidth='true' sx={{backgroundColor:'#A03037 !important'}}>SignUp</Button>
                </Box>
            </Box>
        </Paper>
    </Box>
  )
}

export default SignUp;