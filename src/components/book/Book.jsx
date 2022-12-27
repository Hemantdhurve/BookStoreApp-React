import React from 'react'
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';


const useStyle = makeStyles({
    
    bookBox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        // left: '15vw',
        // top: '6vh',
        marginRight:'40px',
        marginBottom:'30px',
        width: '15vw',
        height: '42vh',
        border: '1px solid #D3D3D3',
        
    },
    imageBox: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        boxSizing:'border-box',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    
    dataBox: {
        display: 'flex',
        justifyContent: 'center',
        height: '17vh',       
    },
    booktextBox: {
        display: 'flex',
        flexDirection: 'column',
        position:'relative',
        top:'1vh',
        width: '85%',
        height: '85%',
        textAlign: 'left',
    },
    titletxt: {
        fontWeight: '500',        
        height: '23%',
    },
    authortxt: {
        fontSize: '12px',
        height: '23%',
        color: '#878787',        
    },
    ratingBox: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        top: '2px',
        left:'2px',
        alignItems: 'center',
        width: '40%',
        height: '20%',        
        justifyContent: 'space-between',
        
    },
    star: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        height:'100%',
        backgroundColor: '#388E3C',        
        justifyContent: 'space-evenly',
        alignItems:'center',
        color: 'white',
    },
    priceBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',      
        position: 'relative',
        top: '1vh',
        justifyContent: 'space-between',
        display: 'flex',        
        alignItems:'center'
       
    },
    actPrice: {
        color: '#878787',
        textDecorationLine: 'line-through',
    }
})
function Book(props) {
    const classes = useStyle()
    return (
        <Box>           
            <Paper className={classes.bookBox} elevation={3} >
                <Box className={classes.imageBox}>
                    <Box style={{width:'50%',height:'85%'}}>
                        <img className={classes.image} src={props.book.image} />
                    </Box>
                </Box>
                <Box className={classes.dataBox}>
                    <Box className={classes.booktextBox}>
                        <Box className={classes.titletxt}>
                            {props.book.bookTitle}
                        </Box>
                        <Box className={classes.authortxt}>
                            {props.book.author}
                        </Box>
                        <Box className={classes.ratingBox}>
                            <Box className={classes.star}>
                                <Typography variant='subtitle2'>{props.book.rating}</Typography>
                                <StarPurple500OutlinedIcon style={{ fontSize:'15px' }} />
                            </Box>
                            <Typography variant='subtitle2' style={{color: '#878787',}}>({props.book.ratedCount})</Typography>
                        </Box>
                        <Box className={classes.priceBox}>
                            <Typography style={{fontSize: '14px',fontWeight:'700'}}>Rs.{props.book.discountedPrice} </Typography>
                            <Typography className={classes.actPrice} style={{fontSize: '11px',fontWeight:'550'}} >Rs.{props.book.actualPrice}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Book;