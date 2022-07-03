import { Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'
import Reel from './Reel'

export const Feed = () => {
  return (
    <Box padding={2} flex={4}>
      <Reel/>
      <Post/>
      <Post/>
      <Post/> 
      <Post/>
      <Post/>
      <Post/>
       <Post/>
       <Post/>
    </Box>
  )
}
