import React from 'react';
import { Card, IconButton, Grid, Cell } from 'react-mdl';

import coin from '../../assets/img/coin.svg'
import './cardRedeem.scss';

const CardRedeem = ({ image, price, typeProduct, nameProduct, handlePriceProduct }) => (
    <div>
        <div className="center-flex">
            <Card className="card" shadow={3} >
                <img className="img-fluid" src={image} alt="Product Aerolab"/>
                <div className="cien">
                    <div className="product-card">
                        <p className="type-product">{typeProduct}</p>
                        <p className="name-product">{nameProduct}</p>
                        <p className="price">{price}</p>
                        <a className="link-redeem"><IconButton name="redeem" /></a>
                    </div>
                </div>
                    <div className="overlay">
                        <Grid>
                            <Cell col={12} className="center">
                                <p className="text">{price}</p>
                                <img src={coin} alt="coin" />
                            </Cell>
                            <Cell col={12} className="center">
                                <button onClick={() => handlePriceProduct(price)} className="btn-redeem-card">Redeem now</button>
                            </Cell>

                        </Grid>
                    </div>
            </Card>
        </div>
    </div>
)

export default CardRedeem