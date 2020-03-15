import React from "react";

import axios from "axios";
import FriendsList from "./friendsList";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [{}]
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/pjDevo/followers")
      .then(response => {
        this.setState({
          friends: response.data
        });
        // console.log("card state set", this.state.friends);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <img src={this.props.image} className="card-image" />
          <div className="container">
            <h2>Name: {this.props.name} </h2>
            <h4>
              Username: <b> {this.props.user}</b>{" "}
            </h4>
            <p> {this.props.bio} </p>
          </div>
        </div>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default Card;
