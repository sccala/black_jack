import React from 'react'
import { Box, Button } from '@material-ui/core'

export default function GameProgressButton(props) {
  return (
    <Box mt={1}>
      <Button variant="contained" onClick={props.onClickNext}>
       NEXT
      </Button>
    </Box>
  );
}
