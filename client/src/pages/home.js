import React from 'react';

class Home extends React.Component{


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


  render() {
    return (
      <div style={{
          marginTop:'50px'
        }}>
      <h1>
        Home
        <h1>{this.state.weather.location}</h1>
      </h1>
    </div>
    );
  }
}

export default Home;
