import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingIndicator from "./Components/LoadingIndicator";

const AuthRoute = lazy(() => import("./Components/Route/AuthRoute"));
const GuestRoute = lazy(() => import("./Components/Route/GuestRoute"));
const Header = lazy(() => import("./Components/NavBar/Header"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const SignupPage = lazy(() => import("./Pages/SignupPage"));
const ExplorePage = lazy(() => import("./Pages/ExplorePage"));
const ContributePage = lazy(() => import("./Pages/ContributePage"));
const ForgotPassPage = lazy(() => import("./Pages/ForgotPassPage"));
const ResetPassPage = lazy(() => import("./Pages/ResetPassPage"));
const PlaceDetailPage = lazy(() => import("./Pages/PlaceDetailPage"));
const PlaceReviewPage = lazy(() => import("./Pages/PlaceReviewPage"));
const PlaceEditPage = lazy(() => import("./Pages/PlaceEditPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const EmailConfirmPage = lazy(() => import("./Pages/EmailConfirmPage"));
const PasswordRecoverPage = lazy(() => import("./Pages/PasswordRecoverPage"));
const fo0foPage = lazy(() => import("./Pages/404page"));
const BeGuide = lazy(() => import("./Pages/BeGuidePage"));

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Router>
        <Header />
        <ToastContainer position="bottom-right" />
        <Switch>
          <GuestRoute path="/login" component={LoginPage} />
          <GuestRoute path="/signup" component={SignupPage} />
          <GuestRoute
            exact
            path="/password/request"
            component={ForgotPassPage}
          />
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
          <AuthRoute path="/beguide" component={BeGuide} />
          <AuthRoute path="/notfound" component={NotFoundPage} />
          <AuthRoute path="/error" component={ErrorPage} />
          <GuestRoute path="/email/confirm" component={EmailConfirmPage} />
          <GuestRoute path="/password/sucess" component={PasswordRecoverPage} />
          <AuthRoute exact path="/" component={HomePage} />
          <AuthRoute path="*" component={fo0foPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
