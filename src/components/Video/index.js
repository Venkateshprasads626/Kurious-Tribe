import React, { Component } from 'react'
import './video.css'
import sample from '../../Video/sample.mp4';

class Video extends Component{
    render() {
        return(
            <div className="video-player">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        );
    }
}

export default Video;