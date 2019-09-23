import React, { Component } from 'react';
import ParallaxImage from '../../parrallax/ParallaxImage';
import { Grid, Cell } from 'react-mdl';
import NavbarHome from '../../navbarHome/NavbarHome';
import CardRedeem from '../../card/CardRedeem';

//animations
import {Animated} from "react-animated-css";
import ReactWOW from 'react-wow';

// images
import logo from '../../../assets/aerolab-logo.svg';
import parallaxPrincipal from '../../../assets/img/parallax2.jpg';
import parallaxSecundary from '../../../assets/img/coffeeShop.jpg';
import work from '../../../assets/img/work1.jpg';
import notebook from '../../../assets/img/notebook2.jpg'
import delivery from '../../../assets/img/Delivery.png';
import success from '../../../assets/img/Success.png';
import robot from '../../../assets/img/robot.png';
import game from '../../../assets/img/VR.png';
import product1 from '../../../assets/img/products/AcerAspire-x2.png';
import product2 from '../../../assets/img/products/Alienware13-x2.png';
import product3 from '../../../assets/img/products/MacbookPro-x2.png';
import facebook from '../../../assets/facebook-square-brands.svg';
import youtube from '../../../assets/youtube-square-brands.svg';
import instagram from '../../../assets/instagram-brands.svg';


import './home.scss';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            style: {}
        }
    }
    render() {
        this.state.style = { display: 'none' }
        return (
            <div>
                <Animated animationIn="bounceInLeft" animationOut="fadeIn" animationOutDelay={100} isVisible={false}>
                    <div className="center-flex">
                        <img className="animation-logo" src={ logo } alt="Aerolab"/>
                    </div>
                    <div className="center-flex">
                        <p className="animation-text">Welcome to Redeem</p>
                    </div>
                </Animated>
                    
                    <NavbarHome  />

                <Animated className="content-navbar" animationOut="fadeIn" animationOutDelay={2000} isVisible={false}>
                    <ParallaxImage image={ parallaxPrincipal } />
                </Animated>       

                <ReactWOW delay='2.5s' animation='fadeInUp'>
                    <Grid>
                        <Cell col={4} tablet={4} phone={12}>
                            <div className="cardHome">
                                <CardRedeem image={product1} price={300} typeProduct={'Notebook'} nameProduct={'Macbook Pro'} style={this.state.style}/>
                            </div>
                        </Cell>
                        <Cell col={4} tablet={4} phone={12}>
                            <div className="cardHome">
                                <CardRedeem image={product2} price={300} typeProduct={'Notebook'} nameProduct={'Macbook Pro'} style={this.state.style}/>
                            </div>
                        </Cell>
                        <Cell col={4} tablet={4} phone={12}>
                            <div className="cardHome display">
                                <CardRedeem image={product3} price={300} typeProduct={'Notebook'} nameProduct={'Macbook Pro'} style={this.state.style}/>
                            </div>
                        </Cell>
                    </Grid>
                </ReactWOW>    
                <ReactWOW animation='fadeInUp' data-wow-offset="10" delay='0.5s'>
                    <Grid className="m-top50">
                        <Cell col={6} tablet={4} >
                            <Grid>
                                <Cell col={12} className="center-flex m-top30">
                                    <p className="text-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie ultrices scelerisque. Integer dignissim euismod purus, a maximus libero.</p>
                                </Cell>
                                <Cell col={12} className="center-flex">
                                    <img className="img-delivery" src={delivery} alt="ilustration"/>
                                </Cell>
                            </Grid>
                        </Cell>
                        <Cell col={6} tablet={4} className="center-flex">
                            <img className="img-work" src={work} alt="ilustration"/>
                        </Cell>
                    </Grid>
                </ReactWOW>
                    <ReactWOW animation='fadeInUp' data-wow-offset="10">
                        <Grid className="m-top50">
                            <Cell col={6} tablet={12} className="center-flex">
                                <img className="img-fluid" src={notebook} alt="ilustration"/>
                            </Cell>
                            <Cell col={6} tablet={12}>
                                <Grid>
                                    <Cell col={12} className="center-flex m-top30">
                                        <p className="text-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie ultrices scelerisque. Integer dignissim euismod purus, a maximus libero.</p>
                                    </Cell>
                                    <Cell col={12} className="center-flex">
                                        <img className="img-delivery" src={success} alt="ilustration"/>
                                    </Cell>
                                </Grid>
                            </Cell>
                        </Grid>
                    </ReactWOW>
                    <div className="m-top50">
                        <ParallaxImage image={parallaxSecundary} />
                    </div>
                    <Grid>
                        <Cell col={6} tablet={12} className="m-top150">
                                <Cell col={12} className="center-flex m-top30">
                                    <p className="text-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie ultrices scelerisque. Integer dignissim euismod purus, a maximus libero.</p>
                                </Cell>
                            <Grid>
                                <Cell col={6} tablet={6} phone={12} className="center-flex container-robot m-top30">
                                    <img className="img-delivery" src={robot} alt="ilustration"/>
                                </Cell>
                                <Cell col={6} tablet={6} phone={12} className="robot-text m-top30">
                                    <p className="text-home-robot">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie ultrices scelerisque.</p>
                                </Cell>
                            </Grid>
                        </Cell>
                        <Cell col={6} tablet={12} className="center-flex m-top150">
                            <img className="img-game" src={game} alt="ilustration"/>
                        </Cell>
                    </Grid>
                    
                    <div className="padding-none">
                        <div className="footer center-flex m-top150">
                            <p className="footer-text">THANKS</p>
                        </div>
                    </div>
       
                    <div className="padding-none">
                        <div className="social-media center-flex">
                            <Grid>
                                <Cell col={3} phone={1}>
                                    <img className="logo-size" src={facebook} alt="logo" />
                                </Cell>
                                <Cell col={3} phone={1}>
                                    <img className="logo-size" src={instagram} alt="logo" />
                                </Cell>
                                <Cell col={3} phone={1}>
                                    <img className="logo-size" src={youtube} alt="logo" />
                                </Cell>
                            </Grid>
                        </div>
                    </div>
           
            </div>
        )
    }
}
