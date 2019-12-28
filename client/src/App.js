import React from 'react';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      weather:{}
    }
  }

  componentDidMount(){
    fetch('/weather')
      .then(res=>res.json())
      .then(weather=>this.setState({weather}));
  }

render(){
  return (
    <div className="App">
      <h1>{this.state.weather.location}</h1>
    </div>
  );
}
}
export default App;
