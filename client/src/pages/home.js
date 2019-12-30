import React from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'

class Home extends React.Component{


    constructor(props){
      super(props);
      this.state = {
        weather:{},
        location:'',
        loading:false
      }
    }

    componentDidMount()
    {
      fetch('')
    }

    onSubmit=  (event)=>{
      event.preventDefault();

      if(!!this.state.location){
        this.setState({loading:true})
        fetch('/weather', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({address:this.state.location}),
            }).then((res)=>res.json()).then((data)=>{
              console.log(data)
              this.setState({weather:data,loading:false});
            }).catch(err=>{
              this.setState({loading:false});
            })
        }

    }

  render() {
    return (
      <div style={{
          marginTop:'50px'
        }}>
        <Form loading={this.state.loading}>
          <Form.Input label='Location' placeholder='Enter location you want to search' onChange={(event)=>{
              this.setState({location:event.target.value})
            }} />
          <Button onClick={this.onSubmit} primary>Submit</Button>
        </Form>
        <div className="s">
        <h4>
          {this.state.weather.place}
        </h4>
        <h4>{this.state.weather.summary}</h4>
        <h5>{this.state.weather.temp}</h5>
      </div>
    </div>
    );
  }
}

export default Home;
