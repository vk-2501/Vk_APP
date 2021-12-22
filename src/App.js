import './App.css';
import Navbar from "./components/Navbar";
import FoodRow from "./components/FoodRow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Image from "./Images/MainImage.png";
import MainImage from './components/MainImage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <MainImage />
          <FoodRow />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/productDetail/:foodId" >
          <Navbar />
          <ProductDetail />
        </Route>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
