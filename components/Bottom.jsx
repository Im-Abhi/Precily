import React from "react";

import { FaUserEdit, FaTrashAlt } from "react-icons/fa";

// This component is the 3rd big component in the given UI
const Bottom = ({ users, setId, setDeleteId, openModal, setUpdateId }) => {
  const actions = (user) => {
    openModal(true);
    setUpdateId(user._id);
  };

  return (
    <div className=" h-full py-4 px-6 flex flex-col gap-4 overflow-y-scroll">
      {users.length > 0 ? (
        users.map((user) => (
          <div
            className="flex justify-between items-center bg-white px-5 py-2 rounded-md "
            key={user._id}
          >
            <div className="flex items-center gap-4 justify-start">
              <div className="cursor-pointer" onClick={() => setId(user._id)}>
                <h3 className="uppercase font-bold text-lg">{user.name}</h3>
                <p className="font-normal text-sm">{user.role}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <FaTrashAlt
                className="w-6 h-6 scale-100 transition-transform hover:scale-125 cursor-pointer hover:text-red-700"
                onClick={() => setDeleteId(user._id)}
              />
              <FaUserEdit
                className="w-7 h-7 scale-100 transition-transform hover:scale-125 cursor-pointer hover:text-orange-500"
                onClick={() => actions(user)}
              />
            </div>
          </div>
        ))
      ) : (
        <h1>No Users</h1>
      )}
    </div>
  );
};

export default Bottom;
