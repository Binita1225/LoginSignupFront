import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import About from "./pages/About";
import Skills from "./pages/Skills";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Experience from "./pages/Experience";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import BlogForm from "./pages/BlogForm";
import Testimonial from "./pages/Testimonial";
import TestimonialForm from "./pages/TestimonialForm";
// import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/skills"
            element={
              <PrivateRoute>
                <Skills />
              </PrivateRoute>
            }
          />

          <Route
            path="/experience"
            element={
              <PrivateRoute>
                <Experience />
              </PrivateRoute>
            }
          />

          <Route
            path="/project"
            element={
              <PrivateRoute>
                <Project />
              </PrivateRoute>
            }
          />

          <Route
            path="/blog"
            element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            }
          />

          <Route
            path="/addBlog"
            element={
              <PrivateRoute>
                <BlogForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-blog/:id"
            element={
              <PrivateRoute>
                <BlogForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/testimonial"
            element={
              <PrivateRoute>
                <Testimonial />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-testimonial"
            element={
              <PrivateRoute>
                <TestimonialForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-testimonial/:id"
            element={
              <PrivateRoute>
                <TestimonialForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
