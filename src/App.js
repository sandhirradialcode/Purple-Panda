import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
