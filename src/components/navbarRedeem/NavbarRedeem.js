import React, { Component } from 'react';
import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/img/coin.svg'
import { Link } from 'react-router-dom';
import { Grid, IconButton, Cell, Tooltip } from 'react-mdl';
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
                        <div className="logo-redeem">
                        <Tooltip label="Back Home" position="right"><Link to={'Home'}><img className={""} src={logo} alt=""/></Link></Tooltip>
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
                    <Grid className={"redeem-options"}>
                        <Cell tablet={12} phone={12} className={"redeem-options"}>  
                            
                            <p className={"number-products"}>{`${numberProducts} products`}</p>
                            
                            <div className="container-buttons">
                                <div className="buttons-price">
                                    <button onClick={sortAscendent} className={"btn-cost"}>Lowest price</button>
                                </div>
                                <div className="buttons-price">
                                    <button onClick={sortDescendant} className={"btn-cost"}>highest price</button>
                                </div>
                            </div>

                        </Cell>    
                            
                        <Cell tablet={4} phone={12} className="redeem-options">
                            <Grid>
                                <p className={"user-name"}>{`${userName}`}</p>
                            </Grid>
                            <Grid>
                                <p className={"user-points"}>{`Your points: ${userPoints}`}</p>
                                <img className="icon-coin" src={coin} alt="coin" />
                            </Grid>
                        </Cell>

                    </Grid>
                </div>
            </div>
        )
    }
}

