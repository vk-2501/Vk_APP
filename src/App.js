import './App.css';
import Navbar from "./components/Navbar";
import FoodRow from "./components/FoodRow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Image from "./Images/MainImage.png";
import MainImage from './components/MainImage';
import Footer from "./components/Footer";
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  // let alanBtnInstance;
  let [allData, setAllData] = useState([]);
  let userCredentials = localStorage.getItem("user logged in");

  let user = JSON.parse(userCredentials);
  // console.log(user);
  console.log(user[0]._id);

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: '536cbf69313e565d5b46b5bdcf234ac52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'allItems') {
          // Call the client code that will react to the received command

        } else if (commandData.command === "myItem") {
          // console.log(typeof (commandData.foodId));
          let foodId = commandData.foodId.toString();
          addToCart(foodId);
        } else if (commandData.command === "removeItem") {
          let removeId = commandData.foodId.toString();
          removeFromCart(removeId);
        }
      }
    });
    
  }, []);

  const getAllFoodItems = async () => {
    await axios.get("/api/food").then((res) => {
      setAllData(res.data.data);

    });
  };

  useEffect(() => {
    getAllFoodItems();

  }, [])


  let addToCart = async (foodId) => {
    try {
      console.log("voice script run", foodId);
      await axios.post("/api/user/cart", {
        food: foodId,
        user: user[0]._id.trim(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  let removeFromCart = async (foodId) => {
    try {
      await axios.post("/api/user/cart/delete", {
        user: user[0]._id,
        food: foodId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <MainImage />
          <FoodRow />
          <FoodRow />
          <FoodRow />
          <FoodRow />
          {/* <button onclick={() => {
            userFeedback()
          }}>sent</button> */}
          <Footer />
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
