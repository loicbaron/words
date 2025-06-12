import React, { useState } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

type Event = React.ChangeEvent<HTMLInputElement>;

type LoginFormProps = {
  onSubmit: (username: string, password: string) => void;
};

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = username === '' || password === '';

  const handleUsername = (event: Event) => {
    setUsername(event.target.value);
  }
  const handlePassword = (event: Event) => {
    setPassword(event.target.value);
  }
  const handleSubmit = () => {
    onSubmit(username, password)
  }

  return (<div>
    <input id='username-input' type='text' value={username} onChange={handleUsername} />
    <input id='password-input' type='password' value={password} onChange={handlePassword} />
    <button id='login-button' onClick={handleSubmit} disabled={isDisabled}>Submit</button>
  </div>);
}
