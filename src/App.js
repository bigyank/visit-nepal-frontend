import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthRoute } from "./Components/AuthRoute";
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
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/contribute" component={ContributePage} />
        <Route exact path="/password/request" component={ForgotPassPage} />
        <Route path="/password/recover/:id" component={ResetPassPage} />
        <AuthRoute exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
