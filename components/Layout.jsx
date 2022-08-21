import React from "react";
const Layout = ({ children }) => {
  return (
    <div className="grid layout h-screen">
      <main className="p-10">{children}</main>
    </div>
  );
};

export default Layout;
