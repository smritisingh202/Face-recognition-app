
import React from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Imagelink from './components/Imagelink/Imagelink';
import Facerecog from './components/Facerecog/Facerecog';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
 apiKey: '//Enter your own Clarifai API key here by the accessing the key as directed in README.md document'
});

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box:{},
      route:'signin',
      issignedin:false,
    }
  }



  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }







onInputChange=(event)=>{
  this.setState({input:event.target.value});
}


onButtonSubmit=()=>{
  this.setState({imageUrl:this.state.input});
  app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err));    
}



  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({issignedin: false})
    } else if (route === 'home') {
      this.setState({issignedin: true})
    }
    this.setState({route: route});
  }



  render(){
    const {issignedin, imageUrl, route, box}=this.state;
    return (

      <div className="App">
        
        <Navigation issignedin={issignedin}   onRouteChange={this.onRouteChange}/>
        { this.state.route==='home'
          ?<div>
            <Logo />
    
            <Imagelink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <Facerecog box={box} imageUrl={imageUrl}/>
          </div>
          :(
            route==='signin'?
            <Signin  onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/>
            )
          
      }
      </div>
    );
  }
}

export default App;
