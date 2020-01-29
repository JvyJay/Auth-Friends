import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  // const [cred, setCred] = useState({ name: '', password: '' });
  const [password, setPass] = useState('');
  const [username, setUsername] = useState('');

  const [load, setLoading] = useState(false);
  const submit = e => {
    e.preventDefault();
    setLoading({ load: true });
    axiosWithAuth()
      .post(`http://localhost:5000/api/login`, { username, password })
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push(`/protected`);
      });
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          placeholder='Username'
          type='text'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          name='password'
          value={password}
          onChange={e => setPass(e.target.value)}
        />
        <button>Login</button>
      </form>
      {load && submit && <p>Loading...</p>}
    </>
  );
};

export default Login;
