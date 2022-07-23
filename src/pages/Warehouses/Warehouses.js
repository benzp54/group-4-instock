import './Warehouses.scss';
import React from 'react';
import AddNewWarehouse from '../../components/AddNewWarehouse/AddNewWarehouse';
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse'

class Warehouses extends React.Component{

    constructor() {
        super();
    }

    render () {

        return(
            <>
            <AddNewWarehouse/>
            <EditWarehouse />
            </>
        )
    }
};

export default Warehouses;