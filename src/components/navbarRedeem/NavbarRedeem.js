import React, { Component } from 'react';
import logo from '../../assets/aerolab-logo.svg';
import TOKEN from '../../config/config';
import axios from 'axios';
import coin from '../../assets/img/coin.svg'
import { Button, IconButton } from 'react-mdl';
import './navbarRedeem.scss';

export default class NavbarRedeem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { numberProducts, userName, userPoints, sortDescending, sortAsendig } = this.props;
        
        return (
            <div>
                <div className={"navbar-redeem"}>
                    <div className={""}>
                        <div className="logo">
                            <img className={""} src={logo} alt=""/>
                        </div>
                        <div className={"search-redeem"}>
                            <div className="m-top10">
                                <input placeholder="Serach your product" className={"input-search"} type="text" />
                                <IconButton name="search"></IconButton>
                            </div>
                        </div>
                    </div>
                    <div className={"redeem-options"}>
                        <div className={"redeem-options"}>  
                        
                            <p className={"number-products"}>{`${numberProducts} products`}</p>
                            <Button onClick={sortDescending} className={"btn-cost"}>LowestPrice</Button>
                            <Button onClick={sortAsendig} className={"btn-cost"}>mayor</Button>
                        </div>    
                            
                        <div className="redeem-options">
                            <p className={""}>{`${userName}`}</p>
                            <p className={""}>{`Your points: ${userPoints}`}</p>
                            <img src={coin} alt="coin" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

