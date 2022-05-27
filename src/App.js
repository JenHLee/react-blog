import Write from "./components/write/Write";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ?  <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/settings" element={user ? <Settings /> : <Register/>} />
      </Routes>
    </BrowserRouter> //need to be one div
  );
}

export default App;