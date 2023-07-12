import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoute>
                {" "}
                <Messenger />{" "}
              </ProtectRoute>
            }
          />
          <Route path="messenger/login" element={<Login />}></Route>
          <Route path="messenger/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
