import React from "react";

import axios from "axios";

import Card from "./Card";
import "./App.css";

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
        <header className="App-header"></header>
        <Card
          bio={this.state.bio}
          user={this.state.user}
          image={this.state.imageUrl}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
