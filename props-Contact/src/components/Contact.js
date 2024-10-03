import React from "react"
import Whisker from "../assets/mr-whiskerson.png"
import PhoneIcon from "../assets/phone-icon.png"
import MailIcon from "../assets/mail-icon.png"
export default function Contact(){
    return(
    <div className="contact-card">
    <img src={Whisker} alt=""/>
    <h3>Mr. Whiskerson</h3>
    <div className="info-group">
        <img src={PhoneIcon} alt="" />
        <p>(212) 555-1234</p>
    </div>
    <div className="info-group">
        <img src={MailIcon} alt="" />
        <p>mr.whiskaz@catnap.meow</p>
    </div>
    </div>
)}