import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import About from "./components/about/About";
import TotalPrice from "./components/totalPrice/TotalPrice";

const TotalPriceWrapper = ({ totalPrice, isTotalPriceVisible }) => {
  const location = useLocation();
  const shouldDisplayTotalPrice =
    location.pathname !== "/" && isTotalPriceVisible;

  return shouldDisplayTotalPrice && <TotalPrice total={totalPrice} />;
};

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTotalPriceVisible, setIsTotalPriceVisible] = useState(false);

  const updateTotalPrice = (price) => {
    setTotalPrice(price);
    setIsTotalPriceVisible(true);
  };

  return (
    <Router>
      <NavBar />
      <TotalPriceWrapper
        totalPrice={totalPrice}
        isTotalPriceVisible={isTotalPriceVisible}
      />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                totalPrice={totalPrice}
                isTotalPriceVisible={isTotalPriceVisible}
                updateTotalPrice={updateTotalPrice}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                totalPrice={totalPrice}
                isTotalPriceVisible={isTotalPriceVisible}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
