import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import FinalSite from "./Pages/FinalSite/FinalSite";
import Home from "./Pages/Home";
import BodyCompositionScalePage from "./Pages/Scales/BodyCompositionScalePage";
import KitchenScalePage from "./Pages/Scales/KitchenScalePage";
import SmartMeasuringTapePage from "./Pages/Scales/SmartMeasuringTapePage";
import Footer from "./Shared/Footer/Footer";
import ScrollToTop from "./Shared/ScrollTop";
import { getAllProductsThunk } from "./store/actions/productActions";
import { AuthRoute, CheckLogin, GuestRoute } from "./Utils/guard/guard";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  const getUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (getUser) {
    console.log(getUser.token);
  }

  return (
    <>
      <Router>
        <CheckLogin>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <GuestRoute path="/signup">
              <FinalSite />
            </GuestRoute>
            <AuthRoute path="/checkout">
              <Checkout />
            </AuthRoute>
            <Route path="/body-composition-scale">
              <BodyCompositionScalePage />
            </Route>
            <Route path="/kitchen-scale">
              <KitchenScalePage />
            </Route>
            <Route path="/smart-measuring-tape">
              <SmartMeasuringTapePage />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/privacypolicy">
              <PrivacyPolicy />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </CheckLogin>
      </Router>
    </>
  );
};

export default App;
