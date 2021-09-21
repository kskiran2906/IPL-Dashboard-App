import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  getMatchStatusClassName = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  render() {
    const {matchRecent} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchRecent
    const matchStatusClassName = `match-status ${this.getMatchStatusClassName(
      matchStatus,
    )}`
    return (
      <li className="match-card">
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`competing-team ${competingTeam}`}
        />
        <p className="competing-team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard