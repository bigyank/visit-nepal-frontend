import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthRoute from "./Components/AuthRoute";
import GuestRoute from "./Components/GuestRoute";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ExplorePage from "./Pages/ExplorePage";
import ContributePage from "./Pages/ContributePage";
import ForgotPassPage from "./Pages/ForgotPassPage";
import ResetPassPage from "./Pages/ResetPassPage";
import NotFoundPage from "./Pages/NotFoundPage";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="bottom-right" />
      <Switch>
        <GuestRoute path="/login" component={LoginPage} />
        <GuestRoute path="/signup" component={SignupPage} />
        <AuthRoute path="/explore" component={ExplorePage} />
        <AuthRoute path="/contribute" component={ContributePage} />
        <GuestRoute exact path="/password/request" component={ForgotPassPage} />
        <GuestRoute path="/password/recover/:id" component={ResetPassPage} />
        <AuthRoute exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
