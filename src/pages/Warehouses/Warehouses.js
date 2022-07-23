import React, { Component } from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './Warehouses.scss';
import { Link } from 'react-router-dom';


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
                <div className='warehouses__container'>
                    <h1 className='warehouses__title'>Warehouses</h1>
                    <form className='warehouses__form'>
                        <input className='warehouses__form--input' placeholder='Search'></input>
                        <button className='warehouses__form--button'>+ Add New Warehouse</button>
                    </form>
                </div>
                <div className='warehosue__container'>
                    {this.state.warehouseList.map((warehouseNames)=>{
                        return(
                            <div className='warehouse'>
                                <div className='warehouse__left'>
                                    <h2 className='warehouse__title'>WAREHOUSE</h2>
                                    <Link to={`/warehouses/${warehouseNames.id}`}>
                                        <p className='warehouse__text'>{warehouseNames.name} > </p>
                                    </Link>
                                    <h2 className='warehouse__title'>ADDRESS</h2>
                                    <p className='warehouse__text'>{warehouseNames.address}, {warehouseNames.city}, {warehouseNames.country}</p>
                                    <img className='warehouse__image' src={deleteIcon}></img>
                                </div>
                                <div className='warehouse__right'>
                                    <h2 className='warehouse__title'>CONTACT NAME</h2>
                                    <p className='warehouse__text'>{warehouseNames.contact.name}</p>
                                    <h2 className='warehouse__title'>CONTACT INFORMATION</h2>
                                    <p className='warehouse__text'>{warehouseNames.contact.phone}</p>
                                    <p className='warehouse__text'>{warehouseNames.contact.email}</p>
                                    <img className='warehouse__image--edit' src={editIcon}></img>
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