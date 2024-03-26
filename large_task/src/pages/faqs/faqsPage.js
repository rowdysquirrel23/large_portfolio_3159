//Import styling for this page
import './faqs.css';

export default function Faqs(){
    return  <body className="faqs_body">
                {/* Hero and page title */}
                <h1 className="faqs_hero">ANSWERING YOUR QUESTIONS</h1>
                <h2 className="faqs_title">Frequently Asked Questions</h2>
                {/* Put the page desrciption in its own section to seperate from other content */}
                <section className="faqs_description">
                    <p className="faqs_text">
                    Want to know more about the services we offer? Maybe you have specific questions about our processes that you’d like to learn more about? Or perhaps you just need clarification ona few details. 
                    Whatever the case, the team at Dubai-Landscapes is on hand to help answer any questions you have.Check out our list of frequently asked questions below;
                     if your question is not covered feelfree to contact our team directly. 
                    Drop us a message on WhatsApp or give us a call.
                    </p>
                </section>
                <h3 className="question_section_title">FAQs</h3>
                {/* Section for the list of requently asked questions and their answers */}
                <section className="question_section">
                    {/* Each question and answer are split into their own section to allow for grid to be applyed in css */}
                    <section className="grid1">
                        <p className="question">How can I request a quote for landscaping services?</p>
                        <p className="answer">You can easily request a quote by contacting us through our website or giving us a call. 
                        We'll schedule a consultation to discuss your project requirements and provide you with a customized quote based on your needs and budget.
                        </p>
                    </section>
                    <section className="grid2">
                        <p className="question">Can you work with my budget for landscaping projects?</p>
                        <p className="answer">Yes,  we understand that every project has a budget, and we'll work with you to find solutions that fit within your budget while still delivering high-quality results.
                         Our team will provide transparent pricing and options to meet your needs.</p>
                    </section>
                    <section className="grid3">
                        <p className="question">Can you provide references or examples of your previous work?</p>
                        <p className="answer">Absolutely, we have a portfolio of our past projects and can provide references upon request. You can also check out our website or social media pages for photos and testimonials from satisfied clients.
                        </p>
                    </section>
                    {/* On desktop, the questions will appear in a 3x2 grid format */}
                    <section className="grid4">
                        <p className="question">How often should I water my newly landscaped garden?</p>
                        <p className="answer">The watering frequency for newly landscaped gardens depends on factors such as the type of plants, soil conditions, and weather. 
                        Our team will provide watering guidelines specific to your landscape to ensure optimal growth and health of your plants.
                        </p>
                    </section>
                    <section className="grid5">
                        <p className="question">Can you incorporate sustainable features into my landscape design?</p>
                        <p className="answer">Sustainability is a key consideration in our landscape designs. 
                        We can incorporate features such as rainwater harvesting systems, native plantings, permeable paving, 
                        and efficient irrigation to create eco-friendly landscapes that conserve resources and support biodiversity.
                        </p>
                    </section>
                    <section className="grid6">
                        <p className="question">Can you provide landscaping solutions for small outdoor spaces or balconies?</p>
                        <p className="answer">Yes, we offer creative landscaping solutions for all types of outdoor spaces, including small gardens, balconies, and rooftop terraces. 
                        Our designers specialize in maximizing space utilization and creating functional and beautiful outdoor environments, regardless of size constraints.
                        </p>
                    </section>
                </section>
            </body>
}