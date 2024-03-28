// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0, counter: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {count, counter} = this.state

    return (
      <div className="main-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="counter">{count} </span> mangoes
            <span className="counter">{counter} </span> bananas
          </h1>
          <div className="container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.onMangoIncrement}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.onBananaIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
