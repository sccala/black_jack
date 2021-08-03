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
        <Box className={'h1-header'}>BlackJack</Box>
      </Typography>
      <Typography>
        <Box className={'rule'}>
          The goal of blackjack is to beat the dealer's hand without going over 21. Face cards are worth 10. Aces are worth 1 or 11, whichever makes a
          better hand. Each player starts with two cards, one of the dealer's cards is hidden until the end. To 'Hit' is to ask for another card. To
          'Stand' is to hold your total and end your turn. If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
        </Box>
      </Typography>

      <Box id="table">
        {isGameStart ? (
          <BlackJack />
        ) : (
          <Box className="center-button">
            <Button variant="contained" onClick={handleClick}>
              START
            </Button>
          </Box>
        )}
      </Box>
      <Typography id="footer">
        @2021 Made by <a href="https://github.com/sccala">Sunsoo Chung </a>
      </Typography>
    </Box>
  )
}
