import React, { Component } from 'react';
import ReactDOM from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080"

class Warehouses extends React.Component {
    constructor() {
        super()
        this.state = {
            warehouseList: [],
            warehouseId: '',
        }
    }
    componentDidMount() {
        axios.get(`${apiUrl}/warehouses`)
        .then((response) => {
            console.log(response.data)
            this.setState({
                warehouseList: response.data
            });
        }).catch((error) => {
            console.log('Error')
        });
    }

    render() {
        return (
            <div>
                <h1>Warehouses</h1>
                <form>
                    <input placeholder='Search'></input>
                    <button>+ Add New Warehouse</button>
                </form>
                <div>
                    {this.state.warehouseList.map((warehouseNames)=>{
                        return(
                            <div>
                                <p>WAREHOUSE</p>
                                <p>{warehouseNames.name}</p>
                                <p>ADDRESS</p>
                                <p>{warehouseNames.address}, {warehouseNames.city}, {warehouseNames.country}</p>
                                <p>CONTACT NAME</p>
                                <p>{warehouseNames.contact.name}</p>
                                <p>CONTACT INFORMATION</p>
                                <p>{warehouseNames.contact.phone}</p>
                                <p>{warehouseNames.contact.email}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
    
};


export default Warehouses;