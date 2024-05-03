//Import the images to be used within this page
import React from "react";
import facebook from '../../assets/facebook.webp';
import instagram from '../../assets/instagram.webp';
import linkedin from '../../assets/linkedin.webp';
import whatsapp from '../../assets/whatsapp.webp';


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
                <a href="https://www.facebook.com/">
                <img src={facebook} alt="Facebook Icon"></img>
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram Icon"></img>
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={linkedin} alt="LinkedIn Icon"></img>
                </a>
                <a href="https://www.whatsapp.com/">
                    <img src={whatsapp} alt="WhatsApp Icon"></img>
                </a>
            </section>
        </section>
    )
}