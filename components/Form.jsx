import React from "react";

// add user form component
const Form = ({ handleChange, handleSubmit, user, type }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold border-b-4 border-[#059dc0] text-center inline-block">
        {type === "UPDATE" ? "UPDATE USER" : "ADD USER"}
      </h3>
      <div className="flex flex-col gap-2 justify-center my-3  w-full ">
        <label className="text-sm font-semibold text-[#11025d]">User Name</label>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          value={user.name}
          required
          className="border-none outline-none bg-white text-black px-2 py-3"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center my-3 w-full ">
        <label className="text-sm font-semibold text-[#11025d]">Description</label>
        <input
          name="description"
          value={user.description}
          required
          onChange={handleChange}
          placeholder="Enter description"
          className="border-none outline-none bg-white text-black px-2 py-3"
        />
      </div>
      <button className="w-full bg-[#11025d] font-semibold rounded-md hover:bg-[#059dc0] text-center uppercase transition-all ease-linear text-white px-2 py-3 duration-75">
        {type === "UPDATE" ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
