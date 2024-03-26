//Import the images to be used within this page
import React from "react";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';


export default function Footer() {
    return (
        //This section is for the footer that which will appear at the bottom of each age
        <section className="Footer">
            {/* All of the elements that will appear within the footer */}
            <p className="privacy_policy">Privacy Policy</p>
            <p className="copyright">Ben Scholefield©</p>
           {/* Contained within a section so all can be styled at the same time */}
            <section className="social_media">
                 {/* Social media icon images with alt tags to improve accessibility */}
                <img src={facebook} alt="Facebook Icon"></img>
                <img src={instagram} alt="Instagram Icon"></img>
                <img src={linkedin} alt="LinkedIn Icon"></img>
                <img src={whatsapp} alt="WhatsApp Icon"></img>
            </section>
        </section>
    )
}