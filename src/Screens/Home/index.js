import React, { Component } from 'react'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import Video from '../../components/Video'
import ser1 from '../../Images/ser1.jpg'
import ser2 from '../../Images/ser2.jpg'
import ser3 from '../../Images/ser3.jpg'
import ser4 from '../../Images/ser4.jpg'
import whatsapp from '../../Images/whatsapp.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'


class Home extends Component{
  

    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <Video />
                        <div className="about-background">
                        <div className="about-text">
                            <h1 className="wow bounce" style={{fontWeight: "bold"}}>Why us</h1>
                            <p  className="wow bounceInDown">We are a Bangalore based team of certified and self learnt and experienced professionals.
                                Since we are a passion driven and privately run company, we have the time to make your photograpgic
                                experience a lot more personal. Our guests are made to fell like friends and come back to us again.
                            </p>
                        </div>
                        </div>
                        <div className="service-section">
                            <h2 style={{fontWeight: "bold", textAlign: "center"}}>Services we offer</h2>
                            <div className="cards wow zoomIn">
                            <div className="card">
                                <img src={ser1} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fashion shoot</h5>
                                    <p class="card-text">Need a quick<br/> shoot for <br/> your portfolio!<br/> We are here for you! </p>
                                    <Link to="/Gallery" class="btn btn-primary"> See More</Link>
                                </div>
                            </div>
                            <div class="card" >
                                <img src={ser2} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Product Shoot</h5>
                                    <p class="card-text">Want your products<br/> to stand out and<br/> look unique?<br/>  We are your choice </p>
                                    <Link to="/Gallery" class="btn btn-primary"> See More</Link>
                                </div>
                            </div>
                            <div class="card">
                                <img src={ser3} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Event</h5>
                                    <p class="card-text">Want your program to be captured in a special and candid way ! We'll highlight your best moments!</p>
                                    <Link to="/Gallery" class="btn btn-primary">See More</Link>
                                </div>
                            </div>
                            <div class="card">
                                <img src={ser4} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Wedding</h5>
                                    <p class="card-text">Need your big day to be<br/>captured in the best way ?<br/> You have come<br/> to right place! </p>
                                    <Link to="/Gallery" class="btn btn-primary">See More</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="instagram-section">
                        {/* <div class="elfsight-app-1719d296-edb4-4d32-bb88-e2713177ca51"></div> */}
                        </div>

                    </div>
    
                <Footer />
            </div>
        );
    }
}

export default Home


