import React, { Component } from 'react'
import $ from 'jquery'
import './works.css'
import sample2 from '../../Video/sample2.mp4';

import f1 from '../../Images/f1.jpg'
import f2 from '../../Images/f2.jpg'
import f3 from '../../Images/f3.jpg'
import f4 from '../../Images/f4.jpg'
import f5 from '../../Images/f5.jpg'
import f6 from '../../Images/f6.jpg'
import f7 from '../../Images/f7.jpg'
import f8 from '../../Images/f8.jpg'
import f9 from '../../Images/f9.png'
import f10 from '../../Images/f10.png'
import f11 from '../../Images/f11.png'
import f12 from '../../Images/f12.png'
import f13 from '../../Images/f13.png'

import w1 from '../../Images/w1.jpg'
import w2 from '../../Images/w2.jpg'
import w4 from '../../Images/w4.png'
import w5 from '../../Images/w5.png'
import w6 from '../../Images/w6.png'
import w7 from '../../Images/w7.png'
import w8 from '../../Images/w8.png'
import w9 from '../../Images/w9.png'
import e1 from '../../Images/e1.png'
import e2 from '../../Images/e2.png'
import e3 from '../../Images/e3.png'
import e4 from '../../Images/e4.png'
import e5 from '../../Images/e5.jpg'
import e6 from '../../Images/e6.jpg'
import e7 from '../../Images/e7.jpg'

import p1 from '../../Images/p1.png'
import p2 from '../../Images/p2.png'
import p3 from '../../Images/p3.png'
import p4 from '../../Images/p4.png'
import p5 from '../../Images/p5.png'
import p6 from '../../Images/p6.png'
import p7 from '../../Images/p7.png'
import p8 from '../../Images/p8.png'
import p9 from '../../Images/p9.png'
import p10 from '../../Images/p10.png'
import p11 from '../../Images/p11.png'
import p12 from '../../Images/p12.png'
import p13 from '../../Images/p13.png'




class Works extends Component{
    componentDidMount = () =>{
        $(document).ready(function(){
            $(".button").click(function(){
                var name = $(this).attr("data-filter");
                if(name === "all"){
                    $(".filter").show("2000");
                }
                else{
                    $(".filter").not("."+name).hide("2000");
                    $(".filter").filter("."+name).show("2000");
                }
            });
            $(".navigation a").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
        });

        const lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        document.body.appendChild(lightbox)

        const images = document.querySelectorAll('img')
        images.forEach(image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild)
                }
                lightbox.appendChild(img)
            })
        })
        lightbox.addEventListener('click', e => {
            lightbox.classList.remove('active')
        })

 
    }

    render() {
        return(
            <div className="latest-work">
            <h1 className="work-text1">Latest <span className="work-text2">Works</span></h1>
            <div className="navigation">
                <a href="#" data-filter="all" class="button active">All</a>
                <a href="#" data-filter="Fashion" class="button">Fashion Portfolio</a>
                <a href="#" data-filter="Event" class="button">Events</a>
                <a href="#" data-filter="Wedding" class="button">Wedding</a>
                <a href="#" data-filter="Product" class="button product">Product Shoots</a>
                <a href="#" data-filter="Video" class="button video">Video</a>
            </div>
             <div id="fashion-portfolio" data-lightbox="mygallery">
                 {/* first column */}
                 <div className="row row34"> 
                     <div className="column">
                        <div className="filter Fashion">
                            <img src={f1} id="fashion" />
                        </div>
                       
                        <div className="filter Fashion" >
                            <img src={f2} />
                        </div>
                        <div className="filter Event" >
                            <img src={e3} />
                        </div>
                        <div className="filter Event" >
                            <img src={e2} />
                        </div>
                        <div className="filter Product" >
                            <img src={p2} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f9} />
                        </div>
                        <div className="filter Product" >
                            <img src={p4} />
                        </div>
                        <div className="filter Product" >
                            <img src={p6} />
                        </div>
                        <div className="filter Wedding" >
                            <img src={w6} />
                        </div>
               
                        <div className="filter Wedding" >
                            <img src={w8} />
                        </div>
                        <div className="filter Product">
                            <img src={p10} />
                        </div>
                   
                    </div>     
                       {/* Second column */}
                    <div className="column">
                        <div className="filter Wedding">
                            <img src={w2}  />
                        </div>
                        <div className="filter Event">
                            <img src={e4} />
                        </div>
                   
                    
                        <div className="filter Fashion" >
                            <img src={f10} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f7} />
                        </div>
                        <div className="filter Product" >
                            <img src={p3} />
                        </div>     
                    
                        <div className="filter Fashion" >
                            <img src={f12} />
                        </div>
                        <div className="filter Product" >
                            <img src={p9} />
                        </div>
                        <div className="filter Wedding" >
                            <img src={w5} />
                        </div>
                        <div className="filter Product">
                            <img src={p12} />
                        </div>
                        <div className=" filter video-player Video controls video-box">
                            <video className='videoTag' autoPlay loop muted controls>
                                <source src={sample2} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                       {/* Third column */}
                    <div className="column">
                        <div className="filter Fashion">
                            <img src={f2}  />
                        </div>
                        <div className="filter Wedding">
                            <img src={w6} />
                        </div>
                        <div className="filter Wedding" >
                            <img src={w9} />
                        </div>
                        <div className="filter Product">
                            <img src={p1} />
                        </div>
                       
                        <div className="filter Fashion" >
                            <img src={f3} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f11} />
                        </div>
                        <div className="filter Product" >
                            <img src={p7} />
                        </div>
                        <div className="filter Event" >
                            <img src={e7} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f13} />
                        </div>
                        <div className="filter Event">
                            <img src={e5} />
                        </div>
                        {/* <div className=" filter video-player Video controls">
                            <video className='videoTag' autoPlay loop muted controls>
                                <source src={sample1} type='video/mp4' />
                            </video>
                        </div> */}
                     
                    </div>
                       {/* Fourth column */}
                    <div className="column">
                        <div className="filter Event">
                            <img src={e1}  />
                        </div>
                        <div className="filter Fashion">
                            <img src={f8} />
                        </div>
                        <div className="filter Wedding" >
                            <img src={w7} />
                        </div>
                    
                        <div className="filter Fashion" >
                            <img src={f6} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f8} />
                        </div>
                        <div className="filter Product" >
                            <img src={p5} />
                        </div>
                        <div className="filter Product" >
                            <img src={p8} />
                        </div>
                        <div className="filter Fashion" >
                            <img src={f5} />
                        </div>
                        <div className="filter Wedding" >
                            <img src={w4} />
                        </div>
                        <div className="filter Product">
                            <img src={p11} />
                        </div>
                        <div className="filter Event">
                            <img src={e6} />
                        </div>
                    </div>

                 </div>
            </div>
          
    </div>
        );
    }
}

export default Works;