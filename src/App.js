import React,{Component} from 'react';
import Header from "./Header/Header";
import "./Header/Header.css";
import Body from "./Body/Body";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
  
    )
  }
}

export default App;


