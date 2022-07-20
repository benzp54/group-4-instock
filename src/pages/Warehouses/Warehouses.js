import './Warehouses.scss';
import React from 'react';
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse'

class Warehouses extends React.Component{

    constructor() {
        super();
    }

    render () {

        return(
            <>
            <EditWarehouse />
            </>
        )
    }
};

export default Warehouses;