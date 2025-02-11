import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDotCircle } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Skills = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!userData || !userData.userName) {
      navigate("/login");
    } else {
      setUserData(userData);
    }
  }, [navigate]);

  if (!userData) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      <div className="ml-64 flex-1 bg-gray-900 text-white p-6 mt-16">
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <NavBar />
        </div>

        <div className="mt-16">
          {" "}
          <h2 className="text-2xl text-white font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            {" "}
            <div className="bg-gray-800 text-white p-6 rounded-lg border border-gray-500 flex items-center justify-center">
              <FaHtml5 size={50} className="text-cyan-500" />
              <p className="mt-2">HTML5</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg border border-gray-500 flex items-center justify-center">
              <FaCss3Alt size={50} className="text-cyan-500" />
              <p className="mt-2">CSS3</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg border border-gray-500 flex items-center justify-center">
              <FaJs size={50} className="text-cyan-500" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg border border-gray-500 flex items-center justify-center">
              <FaReact size={50} className="text-cyan-500" />
              <p className="mt-2">React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
