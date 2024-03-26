//Allow styling for this page
import './contact.css';

export default function Contact(){
    return  <body>
        {/* The hero and title of the contact us page */}
            <h1 className="contact_hero" >GET IN TOUCH TODAY</h1>
            <h2 className="contact_title">Contact Us</h2>
            {/* Text section to allow for styling and seperation from other content */}
            <section className="contact_text">
                <p className="contact_description">
                If you need any more information on the range of services Dubai-Landscapes offers, or want to hire our team to carry out work on your property in the UAE, we’re always here to help. 
                We place customer service at the forefront of everything we do and strive to bring British service to the UAE market. 
                To find out more information about how we can enhance your outdoor living experience, drop us a message on WhatsApp or give us a call. 
                Alternatively, you can complete the online form and a member of our team will get in touch with you.
                </p>
            </section>
            {/* Form to be filled in by users attempting to contact */}
            <section className="contact_form_area">
                {/* Each field is required, it cannot be submitted if a field is missing */}
                <form className="contact_form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    
                    <button type="submit" value="Submit">Submit</button>
                </form>
                {/* The form simply refreshes the page once completed as it is not required to be fully working in the brief */}
            </section>
            </body>
}