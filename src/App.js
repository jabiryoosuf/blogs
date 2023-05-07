// import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";

import Topbar from "./components/Topbar/Topbar";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Router> */}
      <Topbar/>
      {/* <Switch>
      <Route exact path="/"> */}
      {/* <Home /> */}

      <Register/>

      {/* </Route> */}
      {/* <Route path="/posts">
        <Homepage />
      </Route>
      <Route path="/register">
        {currentUser ? <Homepage /> : <Register />}
      </Route>
      <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
      <Route path="/post/:id">
         <Single />
      </Route>
      <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
      <Route path="/settings"> */}
      {/* {currentUser ? <Settings /> : <Login />}
      </Route> */}
      {/* </Switch>
  </Router> */}
    </div>
  );
}

export default App;
