import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import {useSelector} from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Success from './pages/Success';

function App() {
  const user = useSelector(state => state.user.currentUser)
    console.log(user)
  return (
   <Router>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/>:<Login/>}
              {/*<Login/>*/}
          </Route>
          <Route path="/register">
          {user ?<Redirect to="/"/>:<Register/>}

              {/*<Register/>*/}
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
