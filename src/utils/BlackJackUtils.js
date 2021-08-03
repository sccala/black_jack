export function getDeck(numberOfDeck = 1) {
  const suits = ['♠', '♣', '❤', '♦']
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck = []
  for (let i = 0; i < numberOfDeck; i++) {
    suits.forEach((suit) => ranks.forEach((rank) => deck.push({ suit: suit, rank: rank })))
  }
  return deck
}

export function getMinimumNumber(initialDeck, penetration) {
  return initialDeck.length - Math.floor(initialDeck.length * penetration)
}

export function getRankNum(rank) {
  switch (rank) {
    case 'A':
      return 1
      break
    case 'J':
    case 'Q':
    case 'K':
      return 10
    default:
      return Number(rank)
  }
}

export function getTotal(hand) {
  let total = 0
  for (const card of hand) {
    total += getRankNum(card.rank)
  }
  return total
}

export function deal(deck, hand) {
  const newDeck = deck.slice()
  const newHand = hand.slice()
  const index = Math.floor(Math.random() * newDeck.length)
  newHand.push(newDeck[index])
  newDeck.splice(index, 1)
  return [newDeck, newHand]
}

export function hasAce(hand) {
  for (const card of hand) {
    if (card.rank === 'A') return true
  }
  return false
}

export function shouldHitForDealer(hand) {
  let total = getTotal(hand)
  if (isSoftHand(hand)) {
    total += 10
  }
  if (total < 17) {
    return true
  }
  return false
}

export function isAce(card) {
  if (card.rank === 'A') {
    return true
  }
  return false
}

export function isFaceCardOrTen(card) {
  return getRankNum(card.rank) === 10
}

export function isSoftHand(hand) {
  if (isBlackJack(hand)) {
    return false
  }
  if (!hasAce(hand)) {
    return false
  }
  if (getTotal(hand) + 10 < 21) {
    return true
  }
  return false
}

export function isBlackJack(hand) {
  if (hand.length !== 2) {
    return false
  }
  const firstCard = hand[0]
  const secondCard = hand[1]
  if ((isAce(firstCard) && isFaceCardOrTen(secondCard)) || (isFaceCardOrTen(firstCard) && isAce(secondCard))) {
    return true
  }
  return false
}

export function getScore(hand) {
  if (isBlackJack(hand)) {
    return [21]
  }
  if (isSoftHand(hand)) {
    return [getTotal(hand), getTotal(hand) + 10]
  }
  return [getTotal(hand)]
}

export function getScoreForDisplay(hand) {
  let score = getScore(hand)
  if (isSoftHand(hand)) {
    return `${score[0]} | ${score[1]}`
  }
  return score[0]
}

/**
 * ハンドの最終スコア取得
 * -----
 * 引数のハンドの最終的なスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {number} score
 */
export function getLastScore(hand) {}

/**
 * 勝敗判定
 * -----
 * プレイヤーとディーラーの勝敗を判定する
 *
 * @param {Array<{suit: string, rank: string}>} dealersHand
 * @param {Array<{suit: string, rank: string}>} playersHand
 * @return {string} 勝敗文字列
 */
export function judge(dealersHand, playersHand) {}
