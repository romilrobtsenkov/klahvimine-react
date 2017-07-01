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
    socket.on('giveNewWordSuccess', this.giveNewWordSuccess.bind(this))
    socket.on('giveNewWordFail', this.giveNewWordFail.bind(this))

    window.addEventListener('keypress', this.keyPressed)

    this.giveNewWord()
  }

  componentWillUnmount() {
    socket.disconnect()
    window.removeEventListener('keypress', this.keyPressed)
  }

  giveNewWord() {
    socket.emit('giveNewWord', { message: 'placeholder' })
  }

  giveNewWordSuccess(data) {
    this.setState({ word: data })
  }

  giveNewWordFail(err) {
    console.log(err)
    alert('failed to get new word')
  }

  keyPressed(e) {
    let correctGuess =
      this.state.word.charAt(0) === String.fromCharCode(e.which)

    if (!correctGuess) {
      console.log('wrong guess')
      throw new Error('wrong guess')
    }

    let trimmedWord = this.state.word.slice(1)
    if (trimmedWord.length === 0) {
      this.giveNewWord()
      return
    }

    this.setState({ word: trimmedWord })
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
