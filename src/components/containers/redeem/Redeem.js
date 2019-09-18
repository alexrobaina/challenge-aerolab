import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import TOKEN from '../../../config/config';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';


import NavbarRedeem from '../../navbarRedeem/NavbarRedeem';
import CardRedeem from '../../card/CardRedeem';

import './redeem.scss'

const MyContext = React.createContext();

export default class Redeem extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            numberProducts: 0
        }

    }

    componentDidMount = async () => {
        await this._dataProducts();
    }

    _formatData(data) {
        let products = [];
        products = data
        this.setState({
            products: products,
            numberProducts: products.length
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
                this._formatData(response.data)
            });
    }

    handlePriceProduct = (price) => {
        this._handleRedeem(price);
    }

    _handleRedeem() {
        console.log(this.state.products);
        console.log(this.props.user)
    }


    render() {
        const products = this.state.products
        return (
            <div>

                    <MyContext.Consumer>
                        {(context) => (
                            <React.Fragment>
                                <p>name: {context.user}</p>
                            </React.Fragment>
                        )}
                    </MyContext.Consumer>

                <NavbarRedeem numberProducts={this.state.numberProducts} />

                <ReactWOW delay='1s' animation='fadeIn'>
                    <Grid className="container-redeem-card">
                        {
                            products.map(product => {
                                return (
                                    <Cell col={3} tablet={4} phone={12}>
                                        <div className="cardRedeem">
                                            <CardRedeem image={product.img.hdUrl} price={product.cost} typeProduct={product.category} nameProduct={product.name} handlePriceProduct={this.handlePriceProduct}/>
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
