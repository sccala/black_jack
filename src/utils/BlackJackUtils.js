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

/**
 * Ace 所持確認
 * -----
 * ハンドの中に Ace が含まれているかどうかを判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} Ace を持っているかどうか
 */
export function hasAce(hand) {}

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

/**
 * Ace カード判定
 * -----
 * 引数のカードが Ace かどうかを判定する
 *
 * @param {{suit: string, rank: string}} card
 * @return {boolean} カードが Ace かどうか
 */
export function isAce(card) {}

/**
 * フェイスカード or 10 カード判定
 * -----
 * 引数のカードがフェイスガード（絵札）か 10 カードかどうかを判定する
 *
 * @param {{suit: string, rank: string}} card
 * @return {boolean} フェイスカードか 10 カードかどうか
 */
export function isFaceCardOrTen(card) {}

/**
 * ソフトハンド判定
 * -----
 * 引数のハンドがソフトハンドかどうかを判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} ソフトハンドかどうか
 */
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

/**
 * ブラックジャック判定
 * -----
 * 引数のハンドがブラックジャックかどうか判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} ブラックジャックかどうか
 */
export function isBlackJack(hand) {}

/**
 * ハンドのスコア取得
 * -----
 * 引数のハンドのスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {Array<number>} ハンドのスコア
 */
export function getScore(hand) {}

/**
 * ハンドのスコア（表示用）取得
 * -----
 * 画面に表示するためのハンドのスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {string}
 */
export function getScoreForDisplay(hand) {}

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
