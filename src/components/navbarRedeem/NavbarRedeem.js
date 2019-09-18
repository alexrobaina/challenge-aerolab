import React, { Component } from 'react';
import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/img/coin.svg'
import { Button, IconButton } from 'react-mdl';
import './navbarRedeem.scss';

export default class NavbarRedeem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { numberProducts, userName, userPoints, sortAscendent, sortDescendant, handleSearch } = this.props;
        
        return (
            <div>
                <div className={"navbar-redeem"}>
                    <div className={""}>
                        <div className="logo">
                            <img className={""} src={logo} alt=""/>
                        </div>
                        <div className={"search-redeem"}>
                            <div className="m-top10">
                                <input 
                                    className={"input-search"} type="text"
                                    placeholder="Serach your product" 
                                    onChange={handleSearch}
                                    />
                                <IconButton name="search"></IconButton>
                            </div>
                        </div>
                    </div>
                    <div className={"redeem-options"}>
                        <div className={"redeem-options"}>  
                        
                            <p className={"number-products"}>{`${numberProducts} products`}</p>
                            <Button onClick={sortAscendent} className={"btn-cost"}>LowestPrice</Button>
                            <Button onClick={sortDescendant} className={"btn-cost"}>mayor</Button>
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

