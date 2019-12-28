import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import Error from './pages/404';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from 'semantic-ui-react'



class App extends React.Component{
  state = { activeItem: 'home' }

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

  return (
    <div className='title'>
      <Router>
        <div>
            <div>
              <Menu pointing secondary>
                <Link to="/">
                        <Menu.Item
                          name='home'
                          active={activeItem === 'home'}
                          onClick={this.handleItemClick}
                        />
                  </Link>
                  <Link to="/pages/about">
                        <Menu.Item
                          name='about'
                          active={activeItem === 'about'}
                          onClick={this.handleItemClick}
                        />
                  </Link>
                </Menu>
            </div>
        <Switch>
          <Route path="/pages/about" exact={true}><About /></Route>
          <Route path="/" exact={true}><Home /></Route>
          <Route path="*" exact={true} component={Error}/>
        </Switch>
        </div>
      </Router>

      <h3 className="foot">Created by Shivam Prajapati</h3>
    </div>
  );
}
}
export default App;
