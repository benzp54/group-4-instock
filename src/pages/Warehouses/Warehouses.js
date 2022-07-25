import React from "react";
import { Route, Switch } from "react-router-dom";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

class Warehouses extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/" exact component={WarehouseList} />
          <Route path="/warehouse/:id" component={WarehouseDetails} />
          <Route />
          {/* <Route path="/warehouse" exact component={Warehouses} />
            <Route path="/warehouse/:id" exact component={WarehouseDetails} />
            <Route path="/warehouse/add-new-warehouse" component={Warehouse} />
            <Route path="/warehouse/edit-warehouse" component={Warehouse} />
            <Route path="/inventory/:id" component={Inventory} /> */}
        </Switch>
      </div>  
    );
  }
}

export default Warehouses;