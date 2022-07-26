import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import AddNewWarehouse from "../../components/AddNewWarehouse/AddNewWarehouse";

class Warehouses extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={WarehouseList} />
            <Route path="/warehouse/:id" component={WarehouseDetails} />
            <Route path="/warehouse/edit/:id" component={EditWarehouse} />
            <Route path="/warehouse/add" component={AddNewWarehouse} />
            <Route />
            {/* <Route path="/warehouse" exact component={Warehouses} />
              <Route path="/warehouse/:id" exact component={WarehouseDetails} />
              <Route path="/inventory/:id" component={Inventory} /> */}
          </Switch>
        </BrowserRouter>
      </div>  
    );
  }
}

export default Warehouses;
