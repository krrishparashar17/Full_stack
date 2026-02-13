import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkoutDetails from "./pages/WorkoutDetails";
import Schedule from "./pages/Schedule";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout/:id" element={<WorkoutDetails />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
