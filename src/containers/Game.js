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
    socket.on('gameCreated', this.gameCreated.bind(this))
    socket.on('gameEnded', this.gameEnded.bind(this))
    socket.on('giveNewWordFail', this.giveNewWordFail.bind(this))
    socket.on('giveNewWordSuccess', this.giveNewWordSuccess.bind(this))
    socket.on('updateWord', this.updateWord.bind(this))
    socket.on('wrongGuess', this.wrongGuess.bind(this))

    window.addEventListener('keypress', this.keyPressed)

    this.startGame()
  }

  componentWillUnmount() {
    socket.disconnect()
    this.removeListener()
  }

  //Local functions

  removeListener() {
    window.removeEventListener('keypress', this.keyPressed)
  }

  gameCreated() {
    console.log('new game started, ready?')
    this.giveNewWord()
  }

  gameEnded() {
    console.log('game ended')
    this.removeListener()
  }

  giveNewWord() {
    socket.emit('giveNewWord', { message: 'placeholder' })
  }

  giveNewWordFail(err) {
    console.log(err)
    alert('failed to get new word')
  }

  giveNewWordSuccess(data) {
    this.setState({ word: data })
  }

  keyPressed(e) {
    socket.emit('letter', String.fromCharCode(e.which))
  }

  startGame() {
    socket.emit('startGame')
  }

  updateWord(word) {
    this.setState({ word: word })
  }

  wrongGuess() {
    console.log('wrong guess')
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
