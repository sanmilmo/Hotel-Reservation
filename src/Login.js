import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sign_in } from './actions';
import Auth from './Auth';

export default function Login(props) {
  const dispatch = useDispatch();
  const [usernameInput, setUserName] = useState("");
  const [passwordInput, setPasswordInput] = useState("");



  async function submitHandler(evt) {
    evt.preventDefault();
    console.log('username', usernameInput);
    console.log('password', passwordInput);
    let name = usernameInput;
    let data = new FormData();
    data.append('username', name);
    data.append('password', passwordInput);
    let response = await fetch('/login', { method: 'POST', body: data });
    let body = await response.text();
    console.log('/login response', body);
    body = JSON.parse(body);
    if (body.success) {
      dispatch(sign_in(name));
      props.setUsername(name);
  };
};
  
    return (
      <>
      <form onSubmit={submitHandler} style={{color: "white", padding: "0 20px"}}>
        <input placeholder="Username" type="text" onChange={(e) => setUserName(e.target.value)}/> {' '}
        <input placeholder="Password" type="password"  onChange={(e) => setPasswordInput(e.target.value)}/>
        <input style={{margin: "10px"}} type="submit" value="Login" />
      </form>
      </>
    );
  
}
