const React = require('react');

class DigitalClicker extends React.Component {
 
  constructor(){
    super()
    this.changeBitrate = this.changeBitrate.bind(this)
    this.changeResolution = this.changeResolution.bind(this)


    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        }),
    });
  }

  changeResolution(){
   
   this.setState({
      settings: Object.assign({}, this.state.settings, { video: { resolution: "720p"}
      }),
    });

  }

  render(){
    return(
    <div>
      <button className="bitrate" onClick= {this.changeBitrate}>Bitrate</button>
      <button className="resolution" onClick= {this.changeResolution}>Resolution</button>
      </div>
    )
  }

}

module.exports = DigitalClicker
