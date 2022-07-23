import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
// import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Warehouse} />
            <Route path="/warehouse" component={Warehouse} />
            <Route path="/warehouse/add-new-warehouse" component={Warehouse} />
            <Route path="/warehouse/edit-warehouse" component={Warehouse} />
            {/* <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/add-inventory" component={Inventory} /> */}
            <Route path="/inventory/edit-inventory" component={Inventory} />

            {/* <Route
              component={() => alert("(404) Bad Request, Page Not Found")}
            /> */}
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
