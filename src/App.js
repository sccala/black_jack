import React, { useState } from 'react'
import './styles.css'
import { Box, Button, Typography } from '@material-ui/core'
import BlackJack from './BlackJack'

export default function App() {
  function handleClick() {}
  // prettier-ignore
  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>BlackJack</Box>
      </Typography>
      <Typography variant="h2">
        <Box className={"h2-header"}>on Codesandbox</Box>
      </Typography>
      <Box id="table">
        {/* Task */}
      </Box>
    </Box>
  );
}
