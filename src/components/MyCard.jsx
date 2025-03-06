import { Button, Typography } from '@material-ui/core';
import React from 'react'

const MyCard = () => {
  return (
    <div className='my-4'>
      <Button variant='contained' color='primary'>Click Me</Button>
      <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ipsam.</Typography>
    </div>
  )
}

export default MyCard;
