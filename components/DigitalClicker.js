const React = require('react');

class DigitalClicker extends React.Component {
 
  constructor(){
    super()
    this.incrementClicks = this.incrementClicks.bind(this)
    this.state = {
    timesClicked: 0
    }
  }

  incrementClicks(){
   
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })

  }

  render(){
    return(
    <button onClick= {this.incrementClicks}>{this.state.timesClicked}</button>
    )
  }

}
module.exports = DigitalClicker
