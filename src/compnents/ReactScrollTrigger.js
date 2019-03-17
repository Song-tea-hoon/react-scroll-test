import React, {Fragment} from 'react';
import ScrollTrigger from 'react-scroll-trigger';

class ReactScrollTrigger extends React.Component {
  state = {
    onProgress: 0,
    onProgressVelocity: 0,
    onEnter: 0,
    onExit: 0
  }
  onEnterViewport = ({progress, velocity}, ref) => {
    this.setState({
      onEnter: parseInt(progress * 100)
    });
  }

  onExitViewport = ({progress, velocity}, ref) => {
    this.setState({
      onExit: parseInt(progress * 100)
    });
  }

  onProgressViewport = ({progress, velocity}, ref) => {
    this.setState({
      onProgress: parseInt(progress * 100),
      onProgressVelocity: parseInt(velocity * 100)
    })
  }
  render () {
    return (
      <Fragment>
        <div style={{height: '1500px', border: '1px solid red'}}>test</div>
        <ScrollTrigger onEnter={this.onEnterViewport} onProgress={this.onProgressViewport} onExit={this.onExitViewport}>
          <div>progress : 화면안에 노출되는 중 - [{this.state.onProgress}]</div>
          <div>enter : 화면진입 시 첫 값 - [{this.state.onEnter}]</div>
          <div>exit : 화면벗어날시 값 - [{this.state.onExit}]</div>
        </ScrollTrigger>
        <div style={{height: '1500px', border: '1px solid red'}}>test</div>
      </Fragment>
    )
  }
}

export default ReactScrollTrigger;