import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDeatils from './Component/FoodDeatils/FoodDeatils';
import Notfound from './Component/Notfound/Notfound';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route path="/foodDeatils/:foodId">
           <FoodDeatils></FoodDeatils>
        </Route>
        <Route exact as path='/'>
          <Home></Home>
          </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        
        <Route path="*">
    <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
