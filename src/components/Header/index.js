import React, { Component } from 'react'
import './header.css'
import kuriologo from '../../Images/kuriologo.svg'
import { Link, NavLink } from 'react-router-dom'
import $ from 'jquery'

class Header extends Component{

componentDidMount = () =>{
    $(".navbar-nav li ").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
}

    render() {
        return(
                
    <div className="header">
       
    <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="/">
            <img src={kuriologo} className="kuriologo" />
        </a>
        
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=" navbar-nav ml-auto">
            <li className="active">
                <NavLink  to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/About">ABOUT US</NavLink>
            </li>
            <li>
                <NavLink to="/Whatwedo">WHAT WE DO ?</NavLink>
            </li>
            <li>
                <NavLink to="/Gallery">GALLERY</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">CONTACT</NavLink>
            </li>

   
        </ul>
    </div>
</nav>
</div>
        );
    }
}




export default Header