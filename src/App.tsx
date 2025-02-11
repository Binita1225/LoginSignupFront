// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Layout from "./layouts/Layout";
// import PrivateRoute from "./routes/PrivateRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />
//         <Route
//           path="/skills"
//           element={
//             <PrivateRoute>
//               <Skills />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Layout from "./layouts/Layout";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Routes with Layout */}

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Private Route for Skills */}
        <Route
          path="/skills"
          element={
            <PrivateRoute>
              <Skills />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
