import { Routes, Route } from "react-router-dom";
import EnvelopePage from "../pages/EnvelopePage";
import SecondPage from "../pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EnvelopePage />} />
      <Route path="/second-page" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
