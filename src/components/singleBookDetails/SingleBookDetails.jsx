import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Typography } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Header from '../header/Header';
import Rating from '@mui/material/Rating'
import { getBooksById } from '../../services/DataService';

const useStyle = makeStyles({
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
  fullDataBox: {
    display: 'flex',
    position: 'relative',
    top: '9vh',
    width: '70vw',
    height: '100vh',
    left: '15vw',
  },
  onlyImagesBox: {
    display: 'flex',
    width: '40%',
    height: '70vh'
  },
  box1: {
    border: '1px solid #D1D1D1',
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
    rowGap: '1vh',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%'
  },
  imgs: {
    display: 'flex',
    height: '45%',
    width: '85%'
  },
  box2: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  bigImg: {
    border: '1px solid #D1D1D1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '86%'
  },
  mainImg: {
    height: '90%',
    width: '80%'
  },
  add2Tag: {
    display: 'flex',
    position: 'relative',
    top: '5%',
    height: '8%',
    justifyContent: 'space-between',
    alignmentBaseline: 'baseline'
  },
  // 2nd half box of text
  textAreaBox: {
    width: '55%',
    position: 'relative',
    left: '3vw',
    display: 'flex',
    flexDirection: 'column',
  },
  dataBox: {
    display: 'flex',
    height: '23%',
    borderBottom: '2px solid grey',
  },
  booktextBox: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '80%',
    textAlign: 'left',
  },
  titletxt: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '25px',
  },
  authortxt: {
    display: 'flex',
    fontSize: '18px',
    height: '20%',
    color: '#878787',
  },
  ratingBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    width: '25%',
    height: '16%',
    justifyContent: 'space-between',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    backgroundColor: '#388E3C',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  priceBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    position: 'relative',
    top: '8px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actPrice: {
    color: '#878787',
    textDecorationLine: 'line-through',
  },
  detailBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '24%',
    borderBottom: '2px solid grey',
  },
  dtltxt: {
    display: 'flex',
    position: 'relative',
    top: '10px',
    width: '100%',
    fontWeight: '400',
    fontSize: '17px',
    color: '#878787'
  },
  para: {
    display: 'flex',
    position: 'relative',
    top: '14px',
    left: '12px',
    width: '97%',
    height: '70%',
    fontSize: '16px',
    fontWeight: '390',
  },
  custRate: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: '30%',
  },
  custTxt: {
    display: 'flex',
    position: 'relative',
    height: '18%',
    top: '10px',
    fontSize: '19px',
    fontWeight: '480',
  },
  overallRatingBox: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#F5F5F5',
    top: '10px',
    height: '76%',
    fontWeight: '500',
    fontSize: '13px',
  },
  inOverall: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '95%',
    left: '15px',
  },
  star5: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    width: '27%',
    top: '2px',
  },
  txtBox: {
    display: 'flex',
    position: 'relative',
    top: '10px',
    height: '55px',
  },
  submitbtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    top: '20px',
    height: '20%'
  },
  roundtxt: {
    display: 'flex',
    width: '30px',
    height: '30px',
    backgroundColor: '#F5F5F5',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black'
  },
  yellowStar: {
    display: 'flex',
    position: 'relative',
    left: '36px'
  },
  reviewTxt: {
    display: 'flex',
    position: 'relative',
    left: '38px',
    fontSize: '12px',
    color: '#707070'
  }

})

function SingleBookDetails(props) {
  const classes = useStyle()

  const [bookDetail, setBookDetail] = useState({ 
    bookTitle: '', 
    author: '', 
    rating: 0, 
    ratingCount: 0, 
    discountedPrice: 0, 
    actualPrice: 0, 
    description: '', 
    // bookQuantity: 0 ,    
    image: '',
  })


  useEffect(() => {
    getBooksById()
    .then((response) => {
      console.log(response)
      setBookDetail(response.data.response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Box>
      <Header />
      <Box className={classes.topbox}>
        <Box className={classes.topinbox}>
          <Box className={classes.txtBook}>
            Home /
          </Box>
          <Box className={classes.subtxt}>Book ({bookDetail.bookId})</Box>
        </Box>
      </Box>
      <Box className={classes.fullDataBox} >
        <Box className={classes.onlyImagesBox}>
          <Box className={classes.box1}>
            <img className={classes.imgs} src={bookDetail.image} />
            <img className={classes.imgs} src={bookDetail.image} />
          </Box>
          <Box className={classes.box2}>
            <Box className={classes.bigImg}>
              <img className={classes.mainImg} src={bookDetail.image} />
            </Box>
            <Box className={classes.add2Tag}>
              <Button variant="contained" style={{ backgroundColor: '#A03037', width: '46%', borderRadius: '0px' }}>Add to Bag</Button>
              <Button variant="contained" style={{ backgroundColor: '#333333', width: '46%', borderRadius: '0px' }} startIcon={<FavoriteOutlinedIcon />}>
                Wishlist
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.textAreaBox}>
          <Box className={classes.dataBox}>
            <Box className={classes.booktextBox}>
              <Box className={classes.titletxt}>
                {bookDetail.bookTitle}
                {/* Book Title */}
              </Box>
              <Box className={classes.authortxt}>
                {bookDetail.author}
                {/* Author */}
              </Box>
              <Box className={classes.ratingBox}>
                <Box className={classes.star}>
                  <Typography variant='h6'>4{bookDetail.rating}</Typography>
                  <StarPurple500OutlinedIcon style={{ fontSize: '20px' }} />
                </Box>
                <Typography style={{ color: '#878787', fontSize: '18px' }}>({bookDetail.ratedCount})</Typography>
              </Box>
              <Box className={classes.priceBox}>
                <Typography style={{ fontSize: '33px', fontWeight: '600' }} >Rs.{bookDetail.discountedPrice} </Typography>
                <Typography className={classes.actPrice} style={{ fontSize: '18px', fontWeight: '550' }} >Rs.{bookDetail.actualPrice}</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.detailBox}>
            <Box className={classes.dtltxt}>• Book Details</Box>
            <Box className={classes.para}>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde reiciendis veritatis praesentium nemo vel alias repudiandae repellat accusantium, enim id temporibus vitae illo accusamus eos dignissimos fuga rerum odit. */}
              {bookDetail.description}
            </Box>
          </Box>
          <Box className={classes.custRate}>
            <Box className={classes.custTxt}>Customer Feedback</Box>
            <Box className={classes.overallRatingBox}>
              <Box className={classes.inOverall}>Overall Rating
                <Typography className={classes.star5}>
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </Typography>
                <Box className={classes.txtBox}>
                  <textarea placeholder='Write your review...' style={{ width: '100%' }} />
                </Box>
                <Box className={classes.submitbtn}>
                  <Button type='submit' variant="contained">Submit</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box style={{ display: 'flex' }}>
              <Typography className={classes.roundtxt}>HD</Typography>
              <Box style={{ display: 'flex', position: 'relative', top: '3px', marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>Hemant Dhurve </Box>
            </Box>
            <Box style={{ height: '40%' }}>
              <Rating className={classes.yellowStar} defaultValue={4} size="small" readOnly />
            </Box>
            <Box className={classes.reviewTxt} >
              <span >Good product. Even though the translation could have been better.</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SingleBookDetails;