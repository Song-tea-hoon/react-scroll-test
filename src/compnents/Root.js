import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import ReactScroll from './ReactScroll';
import ReactScrollTrigger from './ReactScrollTrigger';


class Root extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Fragment>
          <div style={{'margin':'20px 0'}}>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to='/scroll'>Scroll</NavLink> | 
            <NavLink to='/scrollTrigger'>ScrollTrigger</NavLink>
          </div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/scroll" component={ReactScroll} />
            <Route path="/scrollTrigger" component={ReactScrollTrigger}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default Root;