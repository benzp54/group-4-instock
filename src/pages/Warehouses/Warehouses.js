import React, { Component } from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './Warehouses.scss';


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
            <div className='warehouses'>
                <h1 className='warehouses__title'>Warehouses</h1>
                <form className='warehouses__form'>
                    <input placeholder='Search'></input>
                    <button>+ Add New Warehouse</button>
                </form>
                <div>
                    {this.state.warehouseList.map((warehouseNames)=>{
                        return(
                            <div className='warehouse'>
                                <div className='warehouse__left'>
                                    <h2>WAREHOUSE</h2>
                                    <p>{warehouseNames.name}</p>
                                    <h2>ADDRESS</h2>
                                    <p>{warehouseNames.address}, {warehouseNames.city}, {warehouseNames.country}</p>
                                    <img src={deleteIcon}></img>
                                </div>
                                <div className='warehouse__left'>
                                    <h2>CONTACT NAME</h2>
                                    <p>{warehouseNames.contact.name}</p>
                                    <h2>CONTACT INFORMATION</h2>
                                    <p>{warehouseNames.contact.phone}</p>
                                    <p>{warehouseNames.contact.email}</p>
                                    <img src={editIcon}></img>
                                </div>
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