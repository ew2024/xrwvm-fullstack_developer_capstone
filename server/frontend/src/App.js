import LoginPanel from "./components/Login/Login"
//Added Register (also route path included)
import Register from "./components/Register/Register"





import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/test" element={<Test/>} />
    </Routes>
  );
}
export default App;
