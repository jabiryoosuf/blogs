import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Layout from "./components/Layout/Layout";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element= {<Layout/>} >
      <Route path="/" element={<Home />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/write" element={<Write />} ></Route>
      <Route path="/settings" element={<Settings />} ></Route>
      {/* <Route path="/post" element={</>} ></Route> */}

      


      </Route>
      </Routes>
      </BrowserRouter>
      
   

    
     
    </div>
  );
}

export default App;
