/* eslint-disable @next/next/no-img-element */
import React from "react";

// All of the user data is hard coded and available from the github API.
// API Info: https://api.github.com/users/jefferyf

// Instructions: Get the data from the API and make this page dynamic.
// Hint: There are no other npm packages required for this, everything you need is
//  available from hooks and native javascript APIs
// Hint 2: try to consider all use cases (i.e. data loading, data failure)

const User = () => {
  const user = {
    name: 'Jeff Miller',
    location: 'Minneapolis, MN',
    avatar_url: 'https://avatars.githubusercontent.com/u/508592?v=4',
    html_url: 'https://github.com/jefferyf',
    public_repos: 40,
    public_gists: 22,
    followers: 7,
    following: 5,
  }

  return (
    <div>
      <h1>Github User Info</h1>

      <h2>{user.name}</h2>
      <a href={user.html_url}>
        <img
          src={user.avatar_url}
          alt="user avatar"
        />
      </a>
      <h3>Location: {user.location}</h3>
      <p>Stats:</p>
      <ul>
        <li>Public Repos: {user.public_repos}</li>
        <li>Gists: {user.public_gists}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
      </ul>
    </div>
  );
};

export default User;
