import React, { Component } from "react";
import ReactDOM from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

class Warehouses extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/" exact component={WarehouseList} />
          <Route />
          <Route />
        </Switch>
      </div>  
    );
  }
}

export default Warehouses;
