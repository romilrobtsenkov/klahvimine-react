import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/ScoresActions'

class Scores extends Component {
  constructor(props) {
    super(props)
    //this.props.getUserGames(this.props.userId)
  }

  componentWillMount() {
    this.props.getUserGames()
  }

  rendergames() {
    if (this.props.games.length > 0) {
      return this.props.games.map((game, index) => {
        return (
          <div key={index}>
            {game._id}
            {game.draws.map((draw, i) => {
              return (
                <div key={i}>
                  <span>
                    {draw.word.word &&
                      <span>
                        {draw.word.word}
                      </span>}
                  </span>
                </div>
              )
            })}
            <br />
          </div>
        )
      })
    } else return []
  }

  render() {
    return (
      <div>
        {this.rendergames()}
      </div>
    )
  }
}

Scores.propTypes = {
  getUserGames: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.scores.games
  }
}

export default connect(mapStateToProps, actions)(Scores)
