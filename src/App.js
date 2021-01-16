import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthRoute from "./Components/Route/AuthRoute";
import GuestRoute from "./Components/Route/GuestRoute";

import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ExplorePage from "./Pages/ExplorePage";
import ContributePage from "./Pages/ContributePage";
import ForgotPassPage from "./Pages/ForgotPassPage";
import ResetPassPage from "./Pages/ResetPassPage";
import PlaceDetailPage from "./Pages/PlaceDetailPage";
import PlaceReviewPage from "./Pages/PlaceReviewPage";
import PlaceEditPage from "./Pages/PlaceEditPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ErrorPage from "./Pages/ErrorPage";
import EmailConfirmPage from "./Pages/EmailConfirmPage";
import PasswordRecoverPage from "./Pages/PasswordRecoverPage";
import fo0foPage from "./Pages/404page";

import Loading from "./Components/LoadingIndicator";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="bottom-right" />
      <Switch>
        <GuestRoute path="/login" component={LoginPage} />
        <GuestRoute path="/signup" component={SignupPage} />
        <GuestRoute exact path="/password/request" component={ForgotPassPage} />
        <GuestRoute path="/password/recover/:id" component={ResetPassPage} />
        <AuthRoute path="/explore" component={ExplorePage} />
        <AuthRoute path="/contribute" component={ContributePage} />
        <AuthRoute path="/place/edit/:id" component={PlaceEditPage} />
        <AuthRoute
          exact
          path="/place/:id/:action/review"
          component={PlaceReviewPage}
        />
        <AuthRoute path="/place/:id" component={PlaceDetailPage} />
        <AuthRoute path="/notfound" component={NotFoundPage} />
        <AuthRoute path="/error" component={ErrorPage} />
        <GuestRoute path="/email/confirm" component={EmailConfirmPage} />
        <GuestRoute path="/password/sucess" component={PasswordRecoverPage} />
        <AuthRoute exact path="/" component={HomePage} />
        <Route path="/loading" component={Loading} />
        <Route path="*" component={fo0foPage} />
      </Switch>
    </Router>
  );
}

export default App;
