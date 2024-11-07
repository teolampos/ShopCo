import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
