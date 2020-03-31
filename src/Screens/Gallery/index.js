import React, { Component } from 'react'
import './gallery.css'

import Works from '../../components/Works'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


class Gallery extends Component{
   

    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <Works />
                    </div>
                <Footer />
                
            </div>
    
        );
    }
}

export default Gallery;