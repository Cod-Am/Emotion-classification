import React from "react";

import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Layout;
