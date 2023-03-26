import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribed = () => {
    this.setState({isSubscribed: false})
  }

  onClickSubscribe = () => {
    this.setState({isSubscribed: true})
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="Welcome-heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed && (
          <button
            className="subscribe-button"
            onClick={this.onClickSubscribed}
            type="button"
          >
            Subscribed
          </button>
        )}
        {!isSubscribed && (
          <button
            className="subscribe-button"
            onClick={this.onClickSubscribe}
            type="button"
          >
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
