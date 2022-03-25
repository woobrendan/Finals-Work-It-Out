import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const axios = require("axios");

export default function LoginPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/users/login", { data: user })
      .then(function (response) {
        userContext.setUser(response.data.user);
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="text"
          onChange={handleChange}
          value={user.email}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
          value={user.password}
        />
      </Box>
      <Button onClick={handleSubmit}>Log in</Button>
    </div>
  );
}
