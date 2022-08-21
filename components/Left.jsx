import axios from "axios";
import React, { useState } from "react";
import Form from "./Form";

const initialState = {
  name: "",
  description: "",
};

// component displayed on the left side
const Left = ({ setUserData }) => {
  const [user, setUser] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/user", user);
    setUserData(res.data);
    setUser(initialState);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full px-5 py-4">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  );
};

export default Left;
