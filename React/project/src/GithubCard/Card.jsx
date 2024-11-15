/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './github.css';


export const Card = ({userId='Rudra130'}) => {

  const [userData, setUserData] = useState({
    avatar_url: '',
    name: '',
    public_repos: 0, 
    followers: 0,
    following: 0,
  });

  
  useEffect(() => {
    const url = `https://api.github.com/users/${userId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          avatar_url: data.avatar_url,
          name: data.name || 'No Name Available',
          public_repos: data.public_repos || 0, 
          followers: data.followers || 0,
          following: data.following || 0,
        });
      })
      .catch((error) => {
        console.error('Error fetching GitHub user data:', error);
      });
  }, [userId]); 
  return (
    <div className="container">
      <div className="card">
        <img id="img" src={userData.avatar_url} alt="GitHub Avatar" />
      </div>
      <div className="details">
        <h1 id="name">{userData.name}</h1>
        <h5 id="email">rt1766285@gmail.com</h5> {/* This could be dynamic if needed */}
        <div className="repo">
          <p>
            <strong>Repo:</strong> <span id="rep">{userData.public_repos}</span>
          </p>
          <p>
            <strong>Followers:</strong> <span id="followers">{userData.followers}</span>
          </p>
          <p>
            <strong>Following:</strong> <span id="following">{userData.following}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
