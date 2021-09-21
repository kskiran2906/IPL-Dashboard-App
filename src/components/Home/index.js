import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'
import TeamMatches from '../TeamMatches'

class Home extends Component {
  state = {isLoading: true, iplTeamsData: []}

  componentDidMount() {
    this.getDataOfIplTeams()
  }

  getDataOfIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsData: updatedData, isLoading: false})
  }

  getIplTeamsCard = () => {
    const {iplTeamsData} = this.state
    return (
      <ul className="ipl-cards">
        {iplTeamsData.map(eachItem => (
          <TeamCard team={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  getIplLogoAndCards = () => {
    const {iplTeamsData} = this.state
    return (
      <>
        <div className="logo-heading-container">
          <img
            className="ipl-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading-ipl-dashboard">IPL Dashboard</h1>
        </div>
        <div className="ipl-cards-center-container">
          {this.getIplTeamsCard()}
        </div>
      </>
    )
  }

  getLoader = () => (
    <div className="loader-style" testid="loader">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const bgContainerStyle = isLoading
      ? 'bg-container loader-container'
      : 'bg-container'
    return (
      <div className={bgContainerStyle}>
        {isLoading ? this.getLoader() : this.getIplLogoAndCards()}
      </div>
    )
  }
}

export default Home
