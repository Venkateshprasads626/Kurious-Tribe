import React,{ Component } from 'react'
import './about.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'

class About extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                      <Carousel />
                      <div className="about-page">
                      <div className="text-content wow zoomIn">
                        <h1 className="about-head">Hello There !</h1>
                        <h3 className="about-head2">Every company has a story to tell and ours is no different.</h3>
                        <h3 className="about-head1">You may think why “Kurious Tribe”?  What's behind this name?</h3>
                        <p className="aboutus-text">
                        Kurious Tribe is a path that was always chosen long before the name came into 
                        existence. We here at Kurious Tribe don’t see each other as a group but rather 
                        as a family and are always curious to meet and work with new people, also are 
                        always curious and keen to learn new things hence the name “Kurious” and “Tribe”.
                        </p>
                        <p className="aboutus-text">
                        Focusing more on providing individual attention to our clients is the first line of 
                        priority.  It is such a pride to capture the special moments, being a part of 
                        blissful events, witness the stories and bundle of laughter
                        Your important days and special moments are the most precious things in the 
                        world, and we will help you cherish them and  keep them close to you forever.
                        </p>
                      </div>
                      </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default About