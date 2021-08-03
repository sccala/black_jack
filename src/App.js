import React, { useState } from 'react'
import './styles.css'
import { Box, Button, Typography } from '@material-ui/core'
import BlackJack from './BlackJack'

export default function App() {
  const [isGameStart, setIsGameStart] = useState(false)

  function handleClick() {
    setIsGameStart(true)
  }
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
        {isGameStart ? <BlackJack />
                     : <Box className="center-button"><Button variant="contained" onClick={handleClick}>START</Button></Box>}
      </Box>
    </Box>
  );
}
