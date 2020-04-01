import React, { Component } from 'react'
import './what.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import banner from '../../Images/banner.png'
import vector1 from '../../Images/vector1.png'
import vector2 from '../../Images/vector2.png'
import vector3 from '../../Images/vector3.png'
import vector4 from '../../Images/vector4.png'
import { HashLink as Link } from 'react-router-hash-link';
import $ from 'jquery'
import { NavLink } from 'react-router-dom'

class Whatwedo extends Component{

    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div className="">
                            <img src={banner} className="banner1" alt="" />
                        </div>
                        <div className="fashion-page">
                            <div className="fashion-content wow fadeInLeft">
                                <div className="section1">
                                    <img src={vector1} className="align-middle vector1" alt="" />
                                </div>
                                <div className="fashion-text">
                                    <h2 className="f-head">Fashion Portfolio</h2>
                                    <p className="f-text">
                                    Fashion can be anything such as clothes, shoes, make-up, and accessories but how it 
                                    stands out is the pose and how it looks on photos is what makes us unique
                                    </p>
                                    
                                   <Link to="/Gallery"><button type="button" class="btn design-btn">OUR PORTFOLIO</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="Events-page">
                            <div className="events-content wow fadeInRight">
                            <div className="section2">
                                <img src={vector2} className="vector2" alt="" />
                            </div>
                            <div className="Event-text">
                            <h2 className="E-head" style={{fontFamily: "Poppins"}}>Events</h2>
                                    <p className="E-text">
                                    An event or a program with celebrities are to be captured and relished on in the future as a memory. 
                                    We are there to capture the session
                                    </p>
                                 <NavLink to="/Gallery"><button type="button" class="btn design-btn" style={{float: "left"}}>OUR PORTFOLIO</button></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="Wedding-page">
                            <div className="fashion-content wedding-content wow fadeInLeft">
                                <div className="section1">
                                    <img src={vector3} className="vector3" alt="" />
                                </div>
                                <div className="fashion-text">
                                    <h2 className="f-head" style={{fontFamily: "Poppins"}}>Wedding Shoots</h2>
                                    <p className="f-text">
                                    Whether it’s your special day or you’re just celebrating along with everybody else, 
                                    weddings are happy and wonderful events. We are there to cover it
                                    </p>
                                 <a href="/Gallery"><button type="button" class="btn design-btn">OUR PORTFOLIO</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="Product-page">
                        <div className="events-content product-content wow fadeInRight">
                            <div className="section2">
                                <img src={vector4} className="vector2" alt="" />
                            </div>
                            <div className="Event-text">
                            <h2 className="E-head" style={{fontFamily: "Poppins"}}>Product Shoots</h2>
                                    <p className="E-text">
                                    An appealing image of your product integrated along with a brief & sharp features and
                                     descriptions is actually the essential elements. We are the go to people for it .
                                    </p>
                                    <a href="/Gallery"><button type="button" class="btn design-btn" style={{float: "left"}}>OUR PORTFOLIO</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Whatwedo

                              
                                