import React from 'react'

import io from 'socket.io-client'

let socket

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = { word: '' }

    // This binding is necessary to make `this` work in the callback
    this.keyPressed = this.keyPressed.bind(this)
  }

  getInitialState() {
    return { word: '' }
  }

  componentDidMount() {
    socket = io('http://localhost:3000')

    socket.on('game:created', this.gameCreated.bind(this))
    socket.on('game:ended', this.gameEnded.bind(this))

    socket.on('word:recieve', this.wordRecieve.bind(this))
    socket.on('word:update', this.wordUpdate.bind(this))
    socket.on('word:wrongGuess', this.wordWrongGuess.bind(this))

    socket.on('error', this.onError.bind(this))

    window.addEventListener('keypress', this.keyPressed)

    this.startGame()
  }

  componentWillUnmount() {
    socket.disconnect()
    this.removeListener()
  }

  onError(err) {
    switch (err.type) {
    case 'newWord':
      console.warn(err)
      alert('failed to get new word')
      break
    default:
      console.warn(err)
    }
  }

  //Local functions

  removeListener() {
    window.removeEventListener('keypress', this.keyPressed)
  }

  gameCreated() {
    console.log('new game started, ready?')
    this.newWord()
  }

  gameEnded() {
    console.log('game ended')
    this.removeListener()
  }

  newWord() {
    socket.emit('word:new')
  }

  wordRecieve(word) {
    this.setState({ word: word })
  }

  keyPressed(e) {
    socket.emit('word:letter', String.fromCharCode(e.which))
  }

  startGame() {
    socket.emit('game:start')
  }

  wordUpdate(word) {
    this.setState({ word: word })
  }

  wordWrongGuess() {
    console.warn('wrong guess')
  }

  render() {
    return (
      <div>
        <h2>Game page!</h2>
        <p>
          {this.state.word}
        </p>
      </div>
    )
  }
}

export default Game
