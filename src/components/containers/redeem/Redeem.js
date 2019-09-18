import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import TOKEN from '../../../config/config';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';


import NavbarRedeem from '../../navbarRedeem/NavbarRedeem';
import CardRedeem from '../../card/CardRedeem';

import './redeem.scss'

export default class Redeem extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            numberProducts: 0,
            user: [],
            userName: '',
            userPoints: 0,
            isOrder: true
        }

        this.sortDescending = this.sortDescending.bind(this);
        this.sortAsendig = this.sortAsendig.bind(this);
        

    }

    componentDidMount = async () => {
        await this._dataProducts();
        await this._dataUser();
        
    }

    _formatProducts(data) {
        let products = [];
        products = data
        this.setState({
            products: products,
            numberProducts: products.length,
        });
    }

    _dataProducts() {
        axios({
            method: 'get',
            url: 'https://coding-challenge-api.aerolab.co/products',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': TOKEN
            }
          })
            .then((response) => {
                this._formatProducts(response.data)
            });
    }


    _formatUser(data) {
        let user = [];
        user = data
        console.log(user)
        this.setState({
            user: user,
            userName: user.name,
            userPoints: user.points
        });
    }

    _dataUser() {
        axios({
            method: 'get',
            url: 'https://coding-challenge-api.aerolab.co/user/me',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': TOKEN
            }
          })
            .then((response) => {
                console.log(response.data)
                this._formatUser(response.data)
            });
    }

    handlePriceProduct = (price) => {
        this._handleRedeem(price);
    }

    _handleRedeem(price) {
        let userPoints = this.state.userPoints;
        if (userPoints < price) {
            alert('no tienes puntos');
        } else {
            userPoints -= price;
        }
        this.setState({
            userPoints: userPoints
        })
    }

      sortDescending = () => {
          let {isOrder} = this.state
            if(isOrder === true){
                const { products } = this.state;
                products.sort((a, b) => a - b).reverse()
                this.setState({ 
                    products,
                    isOrder: false
                });
                console.log(isOrder)
            } else {
                return
            }
        }
      

      sortAsendig = () => {
        let {isOrder} = this.state
            if(isOrder === false){
                const { products } = this.state;
                products.sort((a, b) => b - a).reverse()
                this.setState({ 
                    products,
                    isOrder: true
                });
            } else {
                return
            }
      }


    render() {
        const { products, userName, numberProducts, userPoints } = this.state
        return (
            <div>
                <ReactWOW delay='1s' animation='fadeIn'>
                    <NavbarRedeem numberProducts={numberProducts} userName={userName} userPoints={userPoints} sortDescending={this.sortDescending} sortAsendig={this.sortAsendig}/>
                </ReactWOW>

                <ReactWOW delay='1.5s' animation='fadeIn'>
                    <Grid className="container-redeem-card">
                        {
                            products.map(product => {
                                return (
                                    <Cell col={3} tablet={4} phone={12}>
                                        <div className="cardRedeem">
                                            <div>
                                                <CardRedeem image={product.img.hdUrl} price={product.cost} typeProduct={product.category} nameProduct={product.name} handlePriceProduct={this.handlePriceProduct}/>
                                            </div>
                                        </div>
                                    </Cell> 
                                )
                            })
                        }
                    </Grid>
                </ReactWOW>

            </div>
        )
    }
}
