import React, { Component } from 'react'
import './carousel.css';
import bannerimage1 from '../../Images/bannerimage1.jpg'
import bannerimage3 from '../../Images/bannerimage3.jpg'
import bannerimage2 from '../../Images/bannerimage2.jpg'
import bannerimage4 from '../../Images/bannerimage4.jpg'


class Carousel extends Component{
    render() {
        return(
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={bannerimage3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={bannerimage4} class="d-block w-100" alt="..." />
                
                    </div>
                    <div class="carousel-item">
                    <img src={bannerimage2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={bannerimage1} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
        );
    }
}

export default  Carousel 