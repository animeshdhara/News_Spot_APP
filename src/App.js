// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY;

  constructor(){
    super();
    this.state={
      mode:'light',
      progress:0
    }
  }
  toggleMode = ()=>{
    console.log("Called toggle mode");
      if(this.state.mode === 'light'){
        this.setState({
          mode:'dark'
        });
        document.body.style.backgroundColor='#132945';
      }
      else{
        this.setState({
          mode:'light'
        });
        document.body.style.backgroundColor='white';
      }
  }
  pageSize = 6;

//Progress bar
setProgress = (progress) => {
  this.setState({
    progress:progress
  })
}

  render() {
    return (
      <>
        <Router>
          <Navbar toggleMode={this.toggleMode} mode = {this.state.mode}/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='home' pageSize={this.pageSize} mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='business' pageSize={this.pageSize} category='business' mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='entertainment' pageSize={this.pageSize} category='entertainment' mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='general' pageSize={this.pageSize} category='general' mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='health' pageSize={this.pageSize} category='health' mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='science' pageSize={this.pageSize} category='science'mode = {this.state.mode} />} ></Route>
          </Routes>
          <Routes>
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='sports' pageSize={this.pageSize} category='sports' mode = {this.state.mode}/>} ></Route>
          </Routes>
          <Routes>
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key='technology' pageSize={this.pageSize} category='technology' mode = {this.state.mode}/>} ></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
