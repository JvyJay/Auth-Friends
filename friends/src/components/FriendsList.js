import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });
  useEffect(() => {
    axiosWithAuth()
      .get(`/friends`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log('You done goofed', err);
      });
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`friends`, newFriend)
      .then(res => {
        setNewFriend({
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err => console.log(`You done goofed`, err));
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='age'
          name='age'
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='email'
          name='email'
          value={newFriend.email}
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
      {friends.map(item => {
        return (
          <div key={item.id}>
            <Friend name={item.name} age={item.age} email={item.email} />
          </div>
        );
      })}
    </>
  );
};

export default FriendsList;
