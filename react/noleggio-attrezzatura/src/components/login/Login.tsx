import  { useState } from "react";
import "./Login.css";
import useLoginApi from "../../hooks/useLoginApi";
import useRegisterApi from "../../hooks/useRegisterApi";

const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLoginApi();
  const { register } = useRegisterApi();

  const toggleForms = () => {
    setIsLoginVisible(!isLoginVisible);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="module form-module">
        <div className="toggle" onClick={toggleForms}>
          Click
        </div>
        <div className="form" style={{ display: isLoginVisible ? "block" : "none" }}>
          <h2>Login to your account</h2>
          <form onSubmit={(e) => {login({username: username, password: password}); e.preventDefault();  }}>
            <input type="text" placeholder="Username" value={username} onChange={(u) => {setUsername(u.currentTarget.value)}}/>
            <input type="password" placeholder="Password" value={password} onChange={(u) => {setPassword(u.currentTarget.value)}}/>
            <button type="submit" onClick={() => console.log(username, password)}>Login</button>
          </form >
        </div>
        <div className="form" style={{ display: isLoginVisible ? "none" : "block" }}>
          <h2>Create an account</h2>
          <form onSubmit={(e) => {register({username: username, password: password}); e.preventDefault(); console.log(username, password)} }>
            <input type="text" placeholder="Username" value={username} onChange={(u) => {setUsername(u.currentTarget.value)}}/>
            <input type="password" placeholder="Password" value={password} onChange={(u) => {setPassword(u.currentTarget.value)}}/>
            <button type="submit">Register</button>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Login;  