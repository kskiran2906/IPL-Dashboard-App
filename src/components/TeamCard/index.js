import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  clickedTeamCard = () => {
    const {team} = this.props
    const {id, name, teamImageUrl} = team
  }

  render() {
    const {team} = this.props
    const {id, name, teamImageUrl} = team
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card-container" onClick={this.clickedTeamCard}>
          <img className="ipl-logo-img" src={teamImageUrl} alt={name} />
          <div className="team-para-container">
            <p className="team-text-para">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
