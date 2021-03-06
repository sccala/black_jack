import React from 'react'
import { Box, Button } from '@material-ui/core'

export default function BlackJackButtons(props) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickHit}>
          HIT
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickStand}>
          STAND
        </Button>
      </Box>
    </Box>
  )
}
