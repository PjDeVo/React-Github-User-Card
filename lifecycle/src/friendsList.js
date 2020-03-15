import React from "react";

function FriendsList({ friends }) {
  console.log(friends);
  return (
    <div className="friends-list-container">
      {friends.map(item => {
        return (
          <div className="friend-card">
            <a href={item.html_url}>
              <img alt="friends" src={item.avatar_url} />
            </a>

            <h1> {item.login}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default FriendsList;
