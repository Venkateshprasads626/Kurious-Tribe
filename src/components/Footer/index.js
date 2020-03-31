import React from 'react'
import './footer.css'
import social1 from '../../Images/social1.svg'
import social2 from '../../Images/social2.svg'
import social3 from '../../Images/social3.svg'
import kuriologo from '../../Images/kuriologo.svg'
const Footer = props =>(
  
    <footer className="page-footer font-small blue pt-4 footer">
            
             
    <div className="container-fluid text-center text-md-left footer1">
  
    
      <div className="row">
  
      
        <div className="col-md-3 mt-md-0 mt-3">
           <img src={kuriologo} className="kuriologo2" alt="Kurious Logo" />
        </div>

        <div className="col-md-3 mt-md-0 mt-3">
        <h4  className="h4-footer" style={{fontFamily: "Cabin, sans-serif"}}>Address: </h4>
          <p className="add1">106,12th main,<br/>
            1st stage, BTM layout<br/>
            Bengaluru - 560029<br/>
            India<br/>
            </p>
        </div>
        <div className="col-md-3 mt-md-0 mt-3">
          <h4 className="h4-footer1" style={{fontFamily: "Cabin, sans-serif"}}>Contact us</h4>
          <p className="add2">  
            Email: reach-us@kurioustribeproductions.com<br/>
            Phone: +91 9632005098
          </p>
        </div>
      
       
        <div className="col-md-3 mt-md-0 mt-3 social-links">
        <h4 className="h4-footer2">Follow us</h4>
          <a  href="#" target="_blank"><img src={social1} className="social11 " /></a>
          <a href="https://www.instagram.com/kurioustribe_productions/?igshid=99yfnl02csri" target="_blank"><img src={social3}  className="social33" /></a> 
        </div>
      </div>
 
    </div>   
 

  
  </footer>
  

);
export default Footer;