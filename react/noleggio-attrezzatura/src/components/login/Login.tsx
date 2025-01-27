import  { useState } from "react";
import "./Login.css";
import useLoginApi from "../../hooks/useLoginApi";
import useRegisterApi from "../../hooks/useRegisterApi";

const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const {error, login } = useLoginApi();
  const {result, error: registerError, register } = useRegisterApi();

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
          <form onSubmit={(e) => {
            if(username.trim() === "" || password.trim() === "") {
              setAlertMessage("Username and password are required");
              e.preventDefault(); 
              return;
            }else {
              login({username: username, password: password}); 
              e.preventDefault(); 
              
            }
          }}>
            <input type="text" placeholder="Username" value={username} onChange={(u) => {setUsername(u.currentTarget.value)}}/>
            <input type="password" placeholder="Password" value={password} onChange={(u) => {setPassword(u.currentTarget.value)}}/>
            <p>{alertMessage}</p>
            {error && <p>{error?.toString()}</p>}
            <button type="submit" onClick={() => console.log(username, password)}>Login</button>
          </form >
        </div>
        <div className="form" style={{ display: isLoginVisible ? "none" : "block" }}>
          <h2>Create an account</h2>
          <form onSubmit={(e) => {
            register({username: username, password: password}); e.preventDefault(); console.log(username, password)} }>
            <input type="text" placeholder="Username" value={username} onChange={(u) => {setUsername(u.currentTarget.value)}}/>
            <input type="password" placeholder="Password" value={password} onChange={(u) => {setPassword(u.currentTarget.value)}}/>
            {registerError && <p>{registerError?.toString()}</p>}
            {result && <p>{result}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Login;  