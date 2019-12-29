import React from 'react';
import axios from 'axios';
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

        axios.post('http://localhost:5000/weather',null,{params:{address:'India '}}).then(() => console.log('Post send'))
      .catch(err => {
        console.error(err);
      });

        // fetch('/weather' , {
        //   method: "POST",
        //   headers: {
        //     'Content-type': 'applicatin/json'
        //   },
        //   body: JSON.stringify({search:'games'})
        // })
        // .then((result) => result.json())
        // .then((info) => { console.log(info); })
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
