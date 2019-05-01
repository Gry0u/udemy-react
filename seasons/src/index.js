import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
  // not required by React
  // constructor(props) {
  //   super(props) // pass props to Component parent class constructor
  //
  //   // init state
  //   this.state = { lat: null, errMessage: '' }
  // }

// Alternate init (babel creates the constructor for us under the hood and init with this.state = ...)
  state = { lat: null, errMessage: '' }

  // called 1 time when the component is rendered for the first time
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({errMessage: err.message})
    )
  }

  // called every time component is updated (when setState is called)
  componentDidUpdate() {
    console.log('My Component was just updated and rerendered')
  }

  // Called when we stop rendering the component
  // componentWillUnmount() {

  // }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>
    } else if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <Loader message="Waiting for user to allow or block fetching location"/>
    }
  }

  // Required by React
  render() {
    return <div className="red border">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
