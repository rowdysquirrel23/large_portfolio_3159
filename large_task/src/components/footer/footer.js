import React from "react";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';


export default function Footer() {
    return (
        <section className="Footer">
            <p className="privacy_policy">Privacy Policy</p>
            <p className="copyright">Ben Scholefield©</p>
            <section className="social_media">
                <img src={facebook} alt="Facebook Icon"></img>
                <img src={instagram} alt="Instagram Icon"></img>
                <img src={linkedin} alt="LinkedIn Icon"></img>
                <img src={whatsapp} alt="WhatsApp Icon"></img>
            </section>
        </section>
    )
}