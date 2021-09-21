import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatches} = this.props
    const {
      id,
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatches[0]
    console.log(latestMatches[0])
    return (
      <div className="latest-match-container">
        <div className="competing-container">
          <h1 className="competing-team">{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div className="team-logo-container">
          <img
            className="team-logo-style"
            src={competingTeamLogo}
            alt={competingTeam}
          />
        </div>
        <div className="innings-container">
          <div>
            <p className="innings-heading">First Innings</p>
            <p>{firstInnings}</p>
            <p className="innings-heading">Second Innings</p>
            <p>{secondInnings}</p>
            <h1 className="innings-heading">Man Of The Match</h1>
            <p>{manOfTheMatch}</p>
            <p className="innings-heading">Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
