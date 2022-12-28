import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Header from '../../components/header/Header';
import { Typography } from '@mui/material';
import WishList from '../../components/wishlist/WishList';

const useStyle = makeStyles({
    bothbox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
    },
    topbox: {
        display: 'flex',
        position: 'relative',
        left: '15.3vw',
        width: '69.5vw',
        top: '3vh',
        alignItems: 'center',
    },
    topinbox: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        width: '13%',
        color: '#9D9D9D'
    },
    txtBook: {
        fontSize: '13px',
        fontWeight: '500'
    },
    subtxt: {
        position: 'relative',
        left: '5px',
        fontSize: '12px',
        fontWeight: '500',
        color: 'black'
    },
    wishBox: {
        display: 'flex',
        position: 'relative',
        left: '15vw',
        top: '8vh',
        width: '70vw',
        height: '8vh',
        backgroundColor: '#E4E4E4',
        border: '1px solid #E4E4E4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inWish: {
        display: 'flex',
        position: 'relative',
        width: '91%',
        height: '60%',
        alignItems: 'center',
    },
})

function WishListDashboard() {
    const classes = useStyle()

    return (
        <div>
            <Header />
            <Box className={classes.bothbox}>
                <Box className={classes.topbox}>
                    <Box className={classes.topinbox}>
                        <Box className={classes.txtBook}>
                            Home /
                        </Box>
                        <Box className={classes.subtxt}>My Wishlist</Box>
                    </Box>
                </Box>
                <Box className={classes.wishBox}>
                    <Box className={classes.inWish}>
                        <Typography style={{ fontSize: '22px', fontWeight: 'bold' }}>My Wishlist (01)</Typography>
                    </Box>
                </Box>
            </Box>
            <WishList />
        </div>
    )
}

export default WishListDashboard;