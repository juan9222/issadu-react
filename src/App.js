import React, {useState, useRef, useEffect} from 'react';
import APIService from './services/APIService.js'
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
import Loader from "./components/Loader/Loader.js"


function App() {
  const isInitialMount = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  async function getBestSellerImages() {
    let imageArray = []
    let bestSellersURLs = await APIService.getBestSellers();
    bestSellersURLs.forEach(bestSellersURL=>{imageArray.push(`https://issadu.com/web/${bestSellersURL.url_img}`) })
    cacheImages(imageArray)
  }
  const cacheImages = async (srcArray) => {
    const promises= await srcArray.map((src) => {
      return new Promise(function(resolve,reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  }
 
  useEffect(() => {
    if (isInitialMount.current) {
      getBestSellerImages();
        isInitialMount.current = false;
     } else {
        return () => {
        }
     }
    // eslint-disable-next-line
  },[])
  return (
    <Provider store={store}>
      <CartProvider>
      {isLoading && <Loader/>}
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
