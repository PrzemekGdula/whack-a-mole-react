import React, { Component } from 'react'
import MoleHole from './MoleHole'
import Button from '@material-ui/core/Button'

class Game extends Component {
  state = {
    holes: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    isGameStarted: false,
    score: 0
  }

  render() {
    return (
      <div>
        <div
          className={'gameboard'}
        >
          {
            this.state.holes.map(
              (row, index) => (
                <div
                  key={'row' + index}
                  className={'gameboard-row'}
                >
                  {
                    row.map(
                      (whole, index) => (
                        <MoleHole
                          key={index}
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