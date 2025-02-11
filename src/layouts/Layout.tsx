import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <div className="absolute left-[256px] w-fit flex items-center justify-center bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
