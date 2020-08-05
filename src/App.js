import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
import Routes from "./routes";

import "./App.css";

class App extends Component {
  state = {
    books: [],
    isLoading: false,
  };
  componentDidMount() {
    const context = this;
    this.setState({isLoading: true}, () =>
      axios.get("https://shielded-basin-94184.herokuapp.com/library").then(res => {
        console.log(res);
        context.setState({
          books: res.data,
          isLoading: false,
        })
      }
      )
    )
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div
          className="container"
          style={{ paddingTop: "84px", paddingBottom: "24px" }}
        >
          <Routes />
        </div>{" "}
      </div>
    );
  }
}

export default App; 
//sksksk