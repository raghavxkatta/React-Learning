import React from "react";
import Whisker from "../assets/mr-whiskerson.png";
import PhoneIcon from "../assets/phone-icon.png";
import MailIcon from "../assets/mail-icon.png";
/* AS i SAVE THIS IT WILL LOG IN ALL THE DETAILS ON THE CONSOLE 4 TIMES WITH THE DETAILS OF ALL THE OTHER ITEMS TOO 
THIS IS BECAUSE WE HAVE 4 CONTACT INSTANCES, Every time react rendered one of the contacts,it ran the console log line inside of the code of that component */
export default function Contact(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={PhoneIcon} alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={MailIcon} alt="" />
                <p>{props.mail}</p>
            </div>
        </div>
    );
}


/* so basically props is acting as object which has the name, mail... properties with which we just need to add just like we did in js and all the things would update */