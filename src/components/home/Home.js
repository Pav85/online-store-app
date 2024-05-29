import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Home = () => {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName("");
  };

  return <div>Home</div>;
};

export default Home;
