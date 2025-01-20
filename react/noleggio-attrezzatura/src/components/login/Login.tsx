import  { useState } from "react";
import "./Login.css";
import useLoginApi from "../../hooks/useLoginApi";

const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const { login } = useLoginApi();

  const toggleForms = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <>
      <div className="module form-module">
        <div className="toggle" onClick={toggleForms}>
          Click
        </div>
        <div className="form" style={{ display: isLoginVisible ? "block" : "none" }}>
          <h2>Login to your account</h2>
          {/* TODO: add i valori del form */}
          <form onSubmit={(e) => {e.}}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="form" style={{ display: isLoginVisible ? "none" : "block" }}>
          <h2>Create an account</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="button">Register</button>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Login;  