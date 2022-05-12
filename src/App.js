import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Universities from "./pages/Universities";
import Portfolio from "./pages/Portfolio";
import Landing from './pages/Landing'
import { useContext, useEffect } from "react";
import { check, getUser } from "./services/userApi";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const App = observer(() => {
  const { user } = useContext(Context)

  useEffect(() => {
    if (check()) {
      user.setIsAuth(true)
      user.setUser(getUser())
    }
  }, [])

  return (
    <div className="App">
      {user.isAuth ?
        <Switch>
          <Main>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/universities" component={Universities} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/dashboard" />
          </Main>
        </Switch> :
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
        </Switch>
      }
    </div>
  );
})

export default App;
