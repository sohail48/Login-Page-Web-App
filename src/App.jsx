import { useState } from "react";
import '../src/App.css';

const App = () => {
  const [UserName, SetUserName] = useState('');
  const [Password, SetPassword] = useState('');

  const Usernamehandlechange = (event) => {
    SetUserName(event.target.value);
  };

  const Passwordhandlechange = (event) => {
    SetPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserName:-', UserName);
    console.log('Password:-', Password);

    SetUserName('');
    SetPassword('');
  };

  return(
    <div className="container">
      <h2 className="title">Login Page</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>UserName:-</label>
            <input type="text" placeholder="Type Your Email" value={UserName} onChange={Usernamehandlechange} className="username_style"/>
          </div>
          <br /><br />
          <div>
            <label>Password:-</label>
            <input type="password" placeholder="Type Your Password" value={Password} onChange={Passwordhandlechange} className="password_style"/>
          </div>
          <br /><br />
          <div className="button_style">
            <button type="submit" className="login_style">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;