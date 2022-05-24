import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import FoodDeatils from './Component/FoodDeatils/FoodDeatils';
import Notfound from './Component/Notfound/Notfound';
import Login from './Component/Login/Login';

import Signup from './Component/Signup/Signup';
import Shipping from './Component/Shipping/Shipping';
import Order from './Component/Order/Order';
import Usecontex from './Component/Context/Usecontex';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
     <Usecontex>
       <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/food/:foodId" element={<FoodDeatils/>}/>
        <Route path="/shipping/:shipId" element={<PrivateRoute><Shipping/></PrivateRoute>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/Order" element={<Order/>}/>
        <Route path="*"  element={<Notfound/>}/>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
     </Usecontex>
     
  );
}

export default App;
