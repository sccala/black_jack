import React, { useEffect, useReducer } from 'react'
import { Box } from '@material-ui/core'
import PlayArea from './components/PlayArea'
import BlackJackButtons from './components/BlackJackButtons'
import GameProgressButton from './components/GameProgressButton'
// import * as BJUtils from './utils/BlackJackUtils'
import { toast, Toaster } from 'react-hot-toast'

/** デッキ初期値 */

/** デッキ使用量 */

/** 初期 state */

/**
 * レデューサー
 * -----
 * ゲームを進行するための処理を行う
 *
 * @param {object} state
 * @param {object} action
 * @return {object} state
 */
function reducer(state, action) {
  switch (action.type) {
    case 'init': {
      return { ...state }
    }
    case 'hit': {
      return { ...state }
    }
    case 'stand': {
      return { ...state }
    }
    case 'checkPlayersHand': {
      return { ...state }
    }
    case 'dealersAction': {
      return { ...state }
    }
    case 'next': {
      return { ...state }
    }
    case 'shuffle': {
      return { ...state }
    }
    case 'checkBlackJack': {
      return { ...state }
    }
    default:
      return { ...state }
  }
}

/**
 * BlackJack コンポーネント
 * -----
 */
export default function BlackJack() {
  // カード初期化
  useEffect(() => {}, [])

  // ブラックジャックかどうかをチェック
  useEffect(() => {}, [])

  // プレイヤーのターンが終わったら、ディーラーのアクションを実行
  useEffect(() => {}, [])

  // シャッフルタイム
  useEffect(() => {}, [])

  /**
   * HITする
   * -----
   * HIT して、ハンドのスコアをチェックする
   */
  function doHit() {}

  /**
   * STAND する
   * -----
   * STAND する
   */
  function doStand() {}

  /**
   * 次のターンに進む
   * -----
   * 次のターンに進む
   */
  function next() {}

  /**
   * ボタン取得
   * -----
   * 現在のターンに従って、ゲーム進行ボタンまたはブラックジャックボタンを返却する
   *
   * @return {JSX.Element} ゲーム進行ボタンまたはブラックジャックボタン
   */
  function getButtons() {}

  return (
    <Box>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <PlayArea />
      <Box>{getButtons()}</Box>
    </Box>
  )
}
