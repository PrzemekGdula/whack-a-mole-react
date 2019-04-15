import React from 'react'
import MoleHole from './MoleHole'
import Button from '@material-ui/core/Button'

class Game extends React.Component {
  state = {
    holes: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    gameHasStarted: false,
    score: 0,

  }

  randomHole = () => {
    const randomRowIndex = Math.floor(Math.random() * this.state.holes.length)
    const randomRowArray = this.state.holes[randomRowIndex]
    const randomHoleIndex = Math.floor(Math.random() * randomRowArray.length)
    const randomHole = this.state.holes[randomRowIndex][randomHoleIndex]
    if (randomHole === this.state.randomHole) {
      return this.randomHole()
    }
    this.setState({ randomHole: randomHole })
  }


  startGame = () => {
    if (this.state.gameHasStarted)
      return
    this.setState({ gameHasStarted: true })
    this.displayMole()
  }

  displayMole = () => {
    const displayMole = setInterval(
      this.randomHole,
      850
    )
    this.gameOver(displayMole)
  }

  gameOver = (displayMole) => {
    setTimeout(
      () => {
        clearInterval(displayMole)
        this.setState({ gameHasStarted: false, randomHole: null })
      },
      5000
    )
  }

  render() {
    console.log(this.state.gameHasStarted)
    return (
      <div>
        <div
          className={'gameboard'}
        >
          {
            this.state.holes.map(
              (row, rowIndex, array) => (
                <div
                  key={'row' + rowIndex}
                  className={'gameboard-row'}
                >
                  {
                    row.map(
                      (hole, holeIndex) => (
                        <MoleHole
                          key={holeIndex}
                          className={
                            this.state.randomHole === array[rowIndex][holeIndex] ?
                              'hole active'
                              :
                              'hole'
                          }
                        />
                      )
                    )
                  }
                </div>
              )
            )
          }
        </div>
        <Button>
          Start the game
        </Button>
      </div>
    )
  }
}

export default Game