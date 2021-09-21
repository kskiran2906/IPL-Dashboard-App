import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatches: [],
    recentMatchesDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.onGetDataOfIplTeam()
  }

  onGetDataOfIplTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/ipl/${id}`
    const teamResponse = await fetch(apiUrl)
    const teamData = await teamResponse.json()
    const teamBannerUrl = teamData.team_banner_url
    const latestMatches = [teamData.latest_match_details]
    const latestMatchDetails = latestMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    const recentMatches = teamData.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      matchStatus: eachItem.match_status,
      secondInnings: eachItem.second_innings,
      venue: eachItem.venue,
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatches: latestMatchDetails,
      recentMatchesDetails: recentMatches,
      isLoading: false,
    })
  }

  getMatchCard = () => {
    const {teamBanner, latestMatches, recentMatchesDetails} = this.state
    return (
      <ul className="ul-recent-matches">
        {recentMatchesDetails.map(eachMatch => (
          <MatchCard matchRecent={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  getMatchDetails = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamBanner, latestMatches, recentMatchesDetails} = this.state
    return (
      <>
        <div className="banner-container">
          <img className="team-banner-style" src={teamBanner} alt={id} />
        </div>
        <h1 className="heading-matches">Latest Matches</h1>
        <LatestMatch latestMatches={latestMatches} />
        {this.getMatchCard()}
      </>
    )
  }

  getLoaderOval = () => (
    <div className="loader-style" testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      teamBanner,
      latestMatches,
      recentMatchesDetails,
      isLoading,
    } = this.state
    const bgStyle = isLoading
      ? `${id}-bg-container loader-center`
      : `${id}-bg-container`
    return (
      <div className={bgStyle}>
        {isLoading ? this.getLoaderOval() : this.getMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
