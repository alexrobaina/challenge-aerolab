import React from 'react';
import { Card, IconButton, Grid, Cell } from 'react-mdl';

import coin from '../../assets/img/coin.svg'
import './cardRedeem.scss';

const CardRedeem = ({ image, price, typeProduct, nameProduct, handlePriceAndIdProduct, productId, style }) => (
    
    <div>
        <div className="center-flex">
            <Card className="card" shadow={3} >
                <img className="img-fluid" src={image} alt="Product Aerolab"/>
                <div className="container-data-card">
                    <div className="product-card">
                        <div className={'container-data-product'}>
                            <div className="container-type-product">
                                <p className="type-product">{typeProduct}</p>
                            </div>
                            <div className="container-name-product">
                                <p className="name-product">{nameProduct.substr(0,16)}</p>
                            </div>
                        </div>
                        <div className="container-price">
                            
                            <p className="price">{price}</p>
                            <IconButton name="redeem" className="link-redeem"/>
                            
                        </div>
                    </div>
                </div>
                    <div className="overlay" style={style}>
                        <Grid>
                            <Cell col={12} className="center container-price-redeem">
                                <p className="text-hover">{price}</p>
                                <img clasName="coin-hover" src={coin} alt="coin-hover" />
                            </Cell>
                            <Cell col={12} className="center container-button-hover">
                                <button onClick={() => handlePriceAndIdProduct(price, productId)} className="btn-redeem-card">Redeem now</button>
                            </Cell>
                        </Grid>
                    </div>
            </Card>
        </div>
    </div>
)

export default CardRedeem