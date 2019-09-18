import React, { Component } from 'react';
import logo from '../../assets/aerolab-logo.svg';
import TOKEN from '../../config/config';
import axios from 'axios';
import coin from '../../assets/img/coin.svg'
import { Button, IconButton } from 'react-mdl';
import './navbarRedeem.scss';
import Redeem from '../containers/redeem/Redeem';

const MyContext = React.createContext({
    user: []
});


export default class NavbarRedeem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }


    componentDidMount = async () => {
        await this._dataProducts();
    }

    _formatData(data) {
        let user = [];
        user = data
        this.setState({
            user: user
        });
    }

    _dataProducts() {
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
                this._formatData(response.data)
            });
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                    <MyContext.Provider value={{
                        user: 'Alex context'
                        }}>
                            <Redeem />
                    </MyContext.Provider>
                    
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
                        
                            <p className={"number-products"}>{`${this.props.numberProducts} products`}</p>
                            <Button className={"btn-cost"}>menor</Button>
                            <Button className={"btn-cost"}>mayor</Button>
                        </div>    
                            
                        <div className="redeem-options">
                            <p className={""}>{`${user.name}`}</p>
                            <p className={""}>{`Your points: ${user.points}`}</p>
                            <img src={coin} alt="coin" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

