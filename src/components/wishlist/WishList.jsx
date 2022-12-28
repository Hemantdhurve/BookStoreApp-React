import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyle = makeStyles({
    box: {
        display: 'flex',
        position: 'relative',
        border: '1px solid #E4E4E4',
        width: '70vw',
        left: '15vw',
        top:'8vh',
        height: '20vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBox: {
        display: 'flex',
        position: 'relative',
        width: '90%',
        height: '70%'
    },
    imgbox1: {
        display: 'flex',
    },
    iimmgg: {
        display: 'flex',
        position: 'relative',
        width: '8vw',
        height: '100%'
    },
    detail: {
        display: 'flex',
        position: 'relative',
        width: '50vw',
        left: '2vw'
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        width: '100%',
    },
    price: {
        display: 'flex',
        position: 'relative',
        top: '10px',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    delete: {
        display: 'flex',
        position: 'relative',
        left:'3vw',
        top:'2px',
        width:'3%',
        height:'95%',
        color:'#9D9D9D !important'
    }
})
function WishList() {
    const classes = useStyle()
    return (
        <div>
            <Box className={classes.box}>
                <Box className={classes.innerBox}>
                    <Box className={classes.imgbox1}>
                        <Box className={classes.iimmgg}>
                            <img src='../assets/shopping.png' />
                        </Box>
                        <Box className={classes.detail}>
                            <Box className={classes.title}>
                                <Typography variant='h6'>Book Title</Typography>
                                <Typography variant='subtitle1'>Author</Typography>
                                <Box className={classes.price}>
                                    <Typography variant='h5'>Rs. 2000</Typography>
                                    <Typography style={{ color: '#878787', textDecorationLine: 'line-through', fontWeight: '500', fontSize: '15px' }}>Rs. 3000</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.delete}>
                            <DeleteIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default WishList;