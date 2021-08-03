import React from 'react'
import { Box, Grid, Chip } from '@material-ui/core'
import { useStyles } from '../hooks/useStyles'
import Card from './Card'
import * as BJUtils from '../utils/BlackJackUtils'

/**
 * プレイエリアコンポーネント
 * -----
 *
 * @param {object} props
 * @return {JSX.Element} プレイエリアコンポーネント
 */
export default function PlayArea(props) {
  const classes = useStyles()

  /**
   * ディーラー用チップ取得
   * -----
   * ディーラーがブラックジャックまたはバーストしたかを表示する Chip コンポーネントを返却する
   *
   * @return {Chip} Chip
   */
  function getDealersChip() {}

  /**
   * プレイヤー用チップ取得
   * -----
   * プレイヤーの勝敗、ブラックジャックまたはバーストしたかどうかを表示するチップを返却する
   *
   * @return {Chip} Chip
   */
  function getPlayersChip() {}
  return (
    <Box className={classes.playArea}>
      <Grid container direction="column" spacing={5} alignItems="center" justify="center">
        <Box className="arrow_box_common arrow_box_dealer" visibility={props.isPlayersTurnEnd ? 'visible' : 'hidden'}>
          {props.dealersHand.length>=2&&BJUtils.getScoreForDisplay(props.dealersHand)}
        </Box>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {props.dealersHand.map((card, index) => {
              let marginLeft = index === 0 ? '0px' : '-50px'
              const hide = index === 1 && !props.isDealersTurnEnd ? true : false
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} hide={hide} />
                </Grid>
              )
            })}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getDealersChip()}</Box>
        </Grid>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {props.playersHand.map((card, index) => {
              let marginLeft = index === 0 ? '0px' : '-50px'
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} hide={false} />
                </Grid>
              )
            })}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getPlayersChip()}</Box>
        </Grid>
        <Box className="arrow_box_common arrow_box_player">{props.playersHand.length >= 2 && BJUtils.getScoreForDisplay(props.playersHand)}</Box>
      </Grid>
    </Box>
  )
}
