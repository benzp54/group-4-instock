import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header"
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Warehouses} />
            <Route path="/warehouse" exact component={Warehouses}/>
            <Route path="/inventory" component={Inventory} />
            <Route
              component={() => alert("(404) Bad Request, Page Not Found")}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;