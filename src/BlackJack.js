import React, { useEffect, useReducer } from 'react'
import { Box } from '@material-ui/core'
import PlayArea from './components/PlayArea'
import BlackJackButtons from './components/BlackJackButtons'
import GameProgressButton from './components/GameProgressButton'
import * as BJUtils from './utils/BlackJackUtils'
import { toast, Toaster } from 'react-hot-toast'
import { getDeck } from './utils/BlackJackUtils'

const initialDeck = BJUtils.getDeck(3)
const penetration = 0.8

const initialState = {
  deck: initialDeck,
  minimumNumber: BJUtils.getMinimumNumber(initialDeck, penetration),
  dealersHand: [],
  playersHand: [],
  isPlayersTurnEnd: false,
  isDealersTurnEnd: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'init': {
      if (state.playersHand.length < 2) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.playersHand)
        return { ...state, deck: newDeck, playersHand: newHand }
      }
      if (state.dealersHand.length < 2) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.dealersHand)
        return { ...state, deck: newDeck, dealersHand: newHand }
      }
      return { ...state }
    }
    case 'hit': {
      const [newDeck, newHand] = BJUtils.deal(state.deck, state.playersHand)
      return { ...state, deck: newDeck, playersHand: newHand }
    }
    case 'stand': {
      return { ...state, isPlayersTurnEnd: true }
    }
    case 'checkPlayersHand': {
      if (BJUtils.getTotal(state.playersHand) > 21) {
        return { ...state, isDealersTurnEnd: true, isPlayersTurnEnd: true }
      }
      if (BJUtils.getTotal(state.playersHand) === 21) {
        return {
          ...state,
          isPlayersTurnEnd: true,
        }
      }
      return { ...state }
    }
    case 'dealersAction': {
      if (BJUtils.shouldHitForDealer(state.dealersHand)) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.dealersHand)
        return {
          ...state,
          deck: newDeck,
          dealersHand: newHand,
        }
      }
      return { ...state, isDealersTurnEnd: true }
    }
    case 'next': {
      return {
        ...state,
        playersHand: [],
        dealersHand: [],
        isDealersTurnEnd: false,
        isPlayersTurnEnd: false,
      }
    }
    case 'shuffle': {
      const newDeck = BJUtils.getDeck(3)
      return { ...state, deck: newDeck }
    }
    case 'checkBlackJack': {
      if (BJUtils.isBlackJack(state.dealersHand) || BJUtils.isBlackJack(state.playersHand)) {
        return { ...state, isDealersTurnEnd: true, isPlayersTurnEnd: true }
      }
      return { ...state }
    }
    default:
      return { ...state }
  }
}

/**
 * BlackJack Component
 * -----
 */
export default function BlackJack() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.dealersHand.length < 2 || state.playersHand.length < 2) {
      dispatch({ type: 'init' })
    }
  }, [state.dealersHand, state.playersHand])

  useEffect(() => {
    if (state.dealersHand.length === 2 && state.playersHand.length === 2) {
      dispatch({ type: 'checkBlackJack' })
    }
  }, [state.dealersHand, state.playersHand])

  useEffect(() => {
    if (state.isPlayersTurnEnd && !state.isDealersTurnEnd) dispatch({ type: 'dealersAction' })
  }, [state.isPlayersTurnEnd, state.isDealersTurnEnd, state.dealersHand])

  // Shuffle time
  useEffect(() => {
    if (state.deck.length <= state.minimumNumber) {
      dispatch({ type: 'shuffle' })
      toast('Shuffled!!', {
        style: {
          borderRadius: '10px',
          background: '#737373',
          color: '#ffffff',
        },
      })
    }
  }, [state.deck, state.minimumNumber])

  /**
   * HIT and score check
   */
  function doHit() {
    dispatch({ type: 'hit' })
    dispatch({ type: 'checkPlayersHand' })
  }

  /**
   * STAND 
   */
  function doStand() {
    dispatch({ type: 'stand' })
  }

  /**
   * next turn
   */
  function next() {
    dispatch({ type: 'next' })
  }

  function getButtons() {
    if (state.isDealersTurnEnd && state.isPlayersTurnEnd) {
      return <GameProgressButton onClickNext={next} />
    }
    if (state.isPlayersTurnEnd === false) {
      return <BlackJackButtons onClickHit={doHit} onClickStand={doStand} />
    }
  }

  return (
    <Box>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <PlayArea
        dealersHand={state.dealersHand}
        playersHand={state.playersHand}
        isPlayersTurnEnd={state.isPlayersTurnEnd}
        isDealersTurnEnd={state.isDealersTurnEnd}
      />
      <Box>{getButtons()}</Box>
    </Box>
  )
}
