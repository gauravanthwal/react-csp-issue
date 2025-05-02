import React from 'react'
import { Button, Typography } from '@mui/material';

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() => ({
//   testButton: {
//       backgroundColor: "blue",
//       color: "white",
//       padding: "10px",
//   },
// }));

const MyCard = () => {
  const classes = useStyles();
  return (
    <div className='my-4'>
      {/* <Button className={classes.testButton} variant='contained' color='primary'>Click Me</Button> */}
      <Button variant='contained' color='primary'>Click Me</Button>
      <Typography color='secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsam.</Typography>
    </div>
  )
}

export default MyCard;
