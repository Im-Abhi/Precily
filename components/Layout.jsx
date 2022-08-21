import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid layout h-screen">
      <h1 className="text-center px-10 py-2 text-3xl font-semibold">Click the whitespace between the components to resize them</h1>
      <main className="p-10">{children}</main>
    </div>
  );
};

export default Layout;
