import React, { Component } from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './Warehouses.scss';
import { Link } from 'react-router-dom';
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse';


const apiUrl = "http://localhost:8080"

class Warehouses extends React.Component {
    constructor() {
        super()
        this.state = {
            warehouseList: [],
            warehouseId: null,
            selectEditWarehouse: null
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

    componentDidUpdate() {
        const activeWarehouse = this.props.match.path.id;

        if (activeWarehouse !== undefined) {
            this.state.selectEditWarehouse = activeWarehouse
        } else {
            console.log("componentDidUpdate");
        }
    }

    render() {
        return (
            <>
            {this.state.warehouseList !== null && this.state.selectEditWarehouse == null ?
            <div className='warehouses'>
                <div className='warehouses__container'>
                    <h1 className='warehouses__title'>Warehouses</h1>
                    <form className='warehouses__form'>
                        <input className='warehouses__form--input' placeholder='Search'></input>
                        <Link to={`/warehouses/add-new-warehouse`}>
                            <button className='warehouses__form--button'>+ Add New Warehouse</button>
                        </Link>
                    </form>
                </div>
                <div className='warehouse__header'>
                    <p className='warehouse__header--top'>WAREHOUSE</p>
                    <p className='warehouse__header--top'>ADDRESS</p>
                    <p className='warehouse__header--top'>CONTACT NAME</p>
                    <p className='warehouse__header--top'>CONTACT INFORMATION</p>
                    <p className='warehouse__header--top action'>ACTIONS</p>
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
                                    <Link to={`/warehouses/delete-warehouse`}>
                                        <img className='warehouse__image' src={deleteIcon}></img>
                                    </Link>
                                </div>
                                <div className='warehouse__right'>
                                    <h2 className='warehouse__title'>CONTACT NAME</h2>
                                    <p className='warehouse__text'>{warehouseNames.contact.name}</p>
                                    <h2 className='warehouse__title'>CONTACT INFORMATION</h2>
                                    <p className='warehouse__text'>{warehouseNames.contact.phone}</p>
                                    <p className='warehouse__text'>{warehouseNames.contact.email}</p>
                                    <Link to={`/warehouses/delete-warehouse`}>
                                        <img className='warehouse__image--delete' src={deleteIcon}></img>
                                    </Link>
                                    <Link to={`/warehouses/edit-warehouse/${warehouseNames.id}`}>
                                        <img className='warehouse__image--edit' src={editIcon}></img>
                                    </Link>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div> 
            : this.state.selectEditWarehouse !== null ?
                <EditWarehouse activeWarehouse = {this.state.warehouseList}/>
            :
            null
            }
            </>
        )
    };
};


export default Warehouses;