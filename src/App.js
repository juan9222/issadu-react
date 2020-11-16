import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.js'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js'
import Home from './pages/Home/Home.js'
import BestSellersPage from './pages/BestSellersPage/BestSellersPage.js'
import Customizer from './pages/Customizer/Customizer';
import Footer from './components/Footer/Footer.js'
import Cart from './pages/Cart/Cart.js'
import Checkout from './pages/Checkout/Checkout.js'
import Contact from "./pages/Contact/Contact"
import FallInLove from "./pages/FallInLove/FallInLove.js"
import Legal from "./pages/Legal/Legal.js"
import CartProvider from "./context/CartContext.js"

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
            <div className="App">
            <Navbar />
            <ShoppingCart />
                <Switch> 
                  <Route exact path="/"> 
                    <Home />
                  </Route>
                  <Route exact path="/best-sellers"> 
                    <BestSellersPage />
                  </Route>
                  <Route exact path="/cart"> 
                    <Cart />
                  </Route>
                  <Route exact path="/checkout"> 
                    <Checkout />
                  </Route>
                  <Route exact path="/contact"> 
                    <Contact />
                  </Route>
                  <Route exact path="/fall"> 
                    <FallInLove />
                  </Route>
                  <Route exact path="/legal"> 
                    <Legal />
                  </Route>
                  <Route exact path="/customizer" component={Customizer}></Route>
                </Switch>
            </div>
          <Footer/>
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
