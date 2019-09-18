import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import TOKEN from '../../../config/config';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';

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
            isOrder: '',
            search: ''
        }

        this.sortDescendant = this.sortDescendant.bind(this);
        this.sortAscendent = this.sortAscendent.bind(this);
        

    }

    componentDidMount = async () => {
        await this._dataProducts();
        await this._dataUser();
        
    }

    // Format Data

    _formatProducts(data) {
        let products = [];
        products = data
        this.setState({
            products: products,
            numberProducts: products.length,
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

    // end format Data

    // axios, search data

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

    // end axios, search data

    // methos Handle

    handlePriceProduct = (price) => {
        this.handleRedeem(price);
    }

    handleRedeem(price) {
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
    // end methos Handle

    // Method for order productos 
    
        sortAscendent = () => {
          let {isOrder} = this.state
            if(isOrder !== 'Ascendent'){
                const { products } = this.state;
                products.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
                this.setState({ 
                    products,
                    isOrder: 'Ascendent'
                });

            } else {
                return
            }
        }
      

      sortDescendant = () => {
        let {isOrder} = this.state
            if(isOrder !== 'Descendant'){
                const { products } = this.state;
                products.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost));
                this.setState({ 
                    products,
                    isOrder: 'Descendant'
                });

            } else {
                return
            }
      }
      // end Method for order productos 

      // method for filter products

      handleSearch = (event) => {
        let { products } = this.state
          this.setState({ 
              search: event.target.value.toLowerCase(),
              products: products
            });
            console.log(this.state.search)
          
      }


    render() {
        const { products, userName, numberProducts, userPoints } = this.state
        console.log(products)
        let searchProducts = products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        )
        return (
            <div>
                <ReactWOW delay='1s' animation='fadeIn'>
                    <NavbarRedeem 
                        numberProducts={numberProducts} 
                        userName={userName} 
                        userPoints={userPoints} 
                        sortDescendant={this.sortDescendant} 
                        sortAscendent={this.sortAscendent}
                        handleSearch={this.handleSearch}
                        />
                </ReactWOW>

                <ReactWOW delay='1.5s' animation='fadeIn'>
                    <Grid className="container-redeem-card">
                        {
                            searchProducts.map(product => {
                                return (
                                    <Cell col={3} tablet={4} phone={12}>
                                        <div className="cardRedeem">
                                            <div>
                                                <CardRedeem 
                                                    id="card-products"
                                                    image={product.img.hdUrl} 
                                                    price={product.cost} 
                                                    typeProduct={product.category} 
                                                    nameProduct={product.name} 
                                                    handlePriceProduct={this.handlePriceProduct}/>
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
