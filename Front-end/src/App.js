import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./Component/MenuBar";
import Home from "./Page/Home";
import ReleaseNew from "./Page/ReleaseNew";
import Reviews from "./Page/Review";
import Tranding from "./Page/Tranding";
import Comedy from "./BookPage/Comedy";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Login/register_form";
import Detail from "./Page/Detail";
import Technology from'./Page/Techonlogy'
import Comment from "./Page/Comment";
import Footer from "./Component/Footer";
import AboutUs from "./Page/AboutUs"
function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") != null
  );

  function changeAuthState(auth) {
    setLoggedIn(auth);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-app">
          <MenuBar auth={isLoggedIn} changeAuthState={changeAuthState} />

          <Switch>
            {/* Route Home Page */}
            <Route path="/home">
              <Home />
              <ReleaseNew />
              <Reviews />
              <Tranding />
            </Route>
            {/* Route Home Page */}
            <Route path="/book/comedy" component={Comedy} />
            {/* //Sign In */}
            <Route path="/signIn">
              <LoginForm changeAuthState={changeAuthState} />
            </Route>
            {/* //Sign Up */}
            <Route path="/signUp" component={RegisterForm} />
            <Route path="/book/detail/:id" component={Detail} />
          <Route path="/technology" component={Technology} />
          <Route path="/comment" component={Comment} />
          <Route path="/aboutus" component={AboutUs} />
       </Switch>
            

            
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
