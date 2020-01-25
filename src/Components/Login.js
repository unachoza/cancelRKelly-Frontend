import React from "react";
import '../CSS/App.css'

const Login = (props) =>  (
    <a href="http://localhost:8888">
      <button className="log-in-button" onClick={(e) => props.route(e)} > Login to Spotify</button>
    </a>
  );

export default Login;
