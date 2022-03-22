import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ExercisePage from "./pages/Exercisepage";
import LoginPage from "./pages/Loginpage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercises/:id" element={<ExercisePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
