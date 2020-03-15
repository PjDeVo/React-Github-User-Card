import React from "react";

import axios from "axios";

import Card from "./Card";
import "./App.css";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      user: "",
      imageUrl: "",
      bio: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/pjdevo")
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data.login,
          imageUrl: response.data.avatar_url,
          bio: response.data.bio,
          name: response.data.name
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <Card
            bio={this.state.bio}
            user={this.state.user}
            image={this.state.imageUrl}
            name={this.state.name}
          />
        </div>
      </div>
    );
  }
}

export default App;
