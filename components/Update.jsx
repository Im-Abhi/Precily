import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

// update component to update user details
const Update = ({ updateId, updateUserData, type, closeModal }) => {
  const [user, setUser] = useState(updateUserData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "UPDATE") {
      const res = await axios.put(`/api/user/${updateId}`, user);
      closeModal();
      return;
    }
    const res = await axios.post("/api/user", user);
    setUserData(res.data);
    setUser(initialState);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-4">
      <Form
        type={type}
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Update;
