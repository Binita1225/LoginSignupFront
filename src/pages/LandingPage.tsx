import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData && userData.userName) {
      navigate("/home"); // Redirect to Home if already logged in
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">
        Explore my skills, experience, and projects.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
