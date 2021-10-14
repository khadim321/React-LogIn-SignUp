import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css"
import { Switch, Route, Redirect } from "react-router";
import Home from './Components/Home';
import HireStaff from "./Components/HireStaff";
import BecomeCeo from "./Components/BecomeCeo";
import HowToHire from "./Components/HowToHire";
import PayDay from "./Components/PayDay";
import Navbar from "./Components/Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar/>

      <Switch>

      <Route exact path="/" component= { Home } />
      <Route exact path="/hirestaff" component= { HireStaff } />
      <Route exact path="/becomeceo" component= { BecomeCeo } />
      <Route exact path="/howtohire" component= { HowToHire } />
      <Route exact path="/payday" component= { PayDay } />
      <Redirect to="/"/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
