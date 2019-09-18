import React, { Component } from 'react'
import { Header, Navigation, IconButton, Layout} from 'react-mdl'  
import { Link } from "react-router-dom";
import ReactWOW from 'react-wow';

import logo from '../../assets/aerolab-logo.svg'
import './navbarHome.scss'

export class NavbarHome extends Component {
    render() {
        return (
            <div>
                <div className="content-navbar">
                    <ReactWOW delay='2s' animation='fadeIn'>
                        <Layout fixedHeader>
                            <Link><img className="logo" src={logo} alt="logo-aerolab"/></Link>
                            <Header className="fixed" title="Aerolab">
                                <Navigation>
                                        <Link rel="noopener noreferrer" to="/redeem" className="btnLink">Redeem <IconButton name="redeem" /></Link>
                                </Navigation>
                            </Header>
                        </Layout>
                    </ReactWOW>  
                </div>
            </div>
        )
    }
}

export default NavbarHome
