import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'
import Card from './Card'

export default function PlayArea(props) {
  const classes = useStyles()
  return (
    <Box className={classes.playArea}>
      <Grid container direction="row" spacing={2} alignItems="center" justify="center">
        <Grid item>
          <Card card={props.card} />
        </Grid>
      </Grid>
    </Box>
  )
}
