import { makeStyles } from '@material-ui/styles'

/** スタイル設定フック */
export const useStyles = makeStyles({
  playArea: {
    margin: '10px 25px',
  },
  cardArea: {
    height: '200px',
  },
  message: {
    fontSize: '22px',
    color: 'white',
  },
  winOrLoseContainer: {
    height: '50px',
    margin: '-50px auto 0px',
  },
  winOrLose: {
    border: '1px solid black',
    backgroundColor: 'grey',
    height: '40px',
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '40px',
    opacity: 0.8,
  },
})
