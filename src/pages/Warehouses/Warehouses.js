import React, { Component } from 'react';
import ReactDOM from 'react';

const Warehouses = (props) => {
    return (
        <div>
            <h1>Warehouses</h1>
            <form>
                <input placeholder='Search'></input>
                <button>+ Add New Warehouse</button>
            </form>
            <p>WAREHOUSE</p>
            <p>ADDRESS</p>
            <p>CONTACT NAME</p>
            <p>CONTACT INFORMATION</p>
        </div>
    )
}

export default Warehouses;