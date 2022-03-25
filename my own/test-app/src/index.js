import React from 'react'
import ReactDOM from 'react-dom'
import DigitalDisplay from './digital-display'
import HelloWorld from './HelloWorld'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime: new Date().toLocaleString(),
    }
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating...')
      this.setState({ currentTime: new Date().toLocaleString() })
    }, 1000)
  }

  render() {
    console.log('Rendering...')
    return (
      <div>
        <DigitalDisplay time={this.state.currentTime} />
        <HelloWorld text={'HelloWorld'} />
      </div>
    )
  }
}
ReactDOM.render(<Clock />, document.getElementById('root'))
