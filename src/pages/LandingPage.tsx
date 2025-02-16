// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData") || "{}");
//     if (userData && userData.userName) {
//       navigate("/home"); // Redirect to Home if already logged in
//     }
//   }, [navigate]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
//       <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
//       <p className="text-xl mb-8">
//         Explore my skills, experience, and projects.
//       </p>
//       <div className="space-x-4">
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
//         >
//           Login
//         </button>
//         <button
//           onClick={() => navigate("/register")}
//           className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addContactForm } from "../services/contactFormServices";
import heroImage from "../assets/halloween1.jpg";
import profileImage from "../assets/halloween2.jpg";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ContactName: "",
    ContactEmail: "",
    Message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData && userData.userName) {
      navigate("/home"); // Redirect to Home if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContactForm(formData);
      setSuccessMessage("Thank you! Your message has been sent");
      setErrorMessage("");
      setFormData({ ContactName: "", ContactEmail: "", Message: "" });
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center p-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg opacity-80 animate-fade">
            Explore my skills, experience, and projects.
          </p>
          <div className="mt-6 space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          alt="halloween1"
          className="w-72 animate-fade-in"
        />
      </section>

      {/* About & Contact Section (Side-by-Side) */}
      <section className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl px-8 py-16 space-y-10 md:space-y-0 md:space-x-12">
        {/* About Section */}
        <div
          id="about"
          className="flex-1 bg-gray-800 text-gray-200 p-10 rounded-lg shadow-lg flex flex-col items-center animate-fade-in"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg mb-6"
          />
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-center">
            Hi, I’m a passionate developer with experience in building web
            applications. I specialize in React, ASP.NET Core, and modern web
            development. I love working on innovative projects and continuously
            learning new skills.
          </p>
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="flex-1 bg-gray-800 text-white p-10 rounded-lg shadow-lg animate-fade-in"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <input
                type="text"
                name="ContactName"
                value={formData.ContactName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="ContactEmail"
                value={formData.ContactEmail}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="Message"
                rows="3"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded text-lg font-semibold hover:bg-blue-600 transition duration-300 w-full"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="mt-4 text-green-400 font-bold">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-400 font-bold">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
