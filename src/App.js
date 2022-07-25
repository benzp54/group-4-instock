import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import Header from "./components/Header/Header";
// import warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
// import Footer from "./components/Footer/Footer";
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import Warehouses from "./components/WarehouseList/WarehouseList";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Warehouses} />
            <Route path="/inventory" component={Inventory} />
            {/* <Route path="/warehouse" exact component={Warehouses} />
            <Route path="/warehouse/:id" exact component={WarehouseDetails} />
            <Route path="/warehouse/add-new-warehouse" component={Warehouse} />
            <Route path="/warehouse/edit-warehouse" component={Warehouse} />
            <Route path="/inventory/:id" component={Inventory} /> */}
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
