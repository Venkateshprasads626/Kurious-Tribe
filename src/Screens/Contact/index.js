import React, { Component } from 'react'
import './contact.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



class Contact extends Component {


    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content1">
                       <h1 style={{fontWeight: "bold"}} className="contact-head">Book Your Session</h1>
                       <div class="text-center">
                        <a href="https://calendly.com/kurious_tribe/15min" target= "_blank"><button type="button" class="btn btn-primary">Get connected</button></a>
                        </div>
                       <p className="contact-head1">Hi, Thank you so much for taking the time to contact us.</p>
                       <h3 style={{fontWeight: "bold", textAlign: "center", marginTop: "0%"}} >got questions ?</h3>
                       <p style={{textAlign: "center", fontSize: "18px"}}>No problem check out our FAQ page for the answers.</p>
                       <hr className="line1"></hr>
                       <div>
                           <div className="form-box">
                              
                               <form>
                               <p>Ready to book your session? Have a question? Just want to say hi? Fill out the form and well do our best to get back to you within a day.</p>
                                <div class="row">
                                    <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                    <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address *</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Mobile</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Number" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Location/ City</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Location/city" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">If referred by friend, family, please list their name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Additional Request or Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary btn8">Submit</button>
                                </form>
                           </div>
                       </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Contact