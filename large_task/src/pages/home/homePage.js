import main_image from '../../assets/2.jpg';
import tool_image from '../../assets/icon_tool.png';
import image_2 from '../../assets/6.jpg';
import './home.css';

export default function Home(){
     
    return  <body>
                <section className="main_banner">
                    <img src={main_image} alt='Garden with pool and well maintained grass'></img>
                    <h1 className='home_hero'>UAE’S LEADING LANDSCAPERS</h1>
                </section>
                <h2 className='main_title'>Garden Landscaping</h2>
                <section className='main_content'>
                    {/* <img className='image_2' src={image_2} alt='Garden with river flowing through and bridge over it'></img> */}
                    <p className='initial_text'>Your garden or outdoor space is an extension of your entire home. 
                    A place where you can relax after a long day, entertain friends and family or socialise with loved ones. 
                    At Dubai-Landscapes, we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire.
                    A British company with more than 30 years in the industry, our UAE offering extends across the country, including Abu Dhabi, Dubai and the surrounding areas. 
                    Providing our customers with leading British design and installation services for a whole host of outdoor livingelements, 
                    we always create customised spaces and bespoke gardens that perfectly matchthe unique specifications of our clients’ outdoor spaces, and align with your vision.
                    </p>
                    {/* <img className='image_3' src={tool_image} alt='Icon of a gardening tool'></img> */}
                    <p className='second_text'>Over the years, we’ve earned a reputation for being the premier landscaping company in theUAE. 
                    Not only is this due to the high-quality products and services we offer, but our team isalso renowned for the focus on customer care that we provide. 
                    Striving to bring Britain’sfamously high level of customer service to the UAE market, we take the time to get to knowyou and your requirements before delivering a premium service that meets all of your needs.
                    </p>
                    <p className='third_text'>Not only can we offer the design and installation of a number of soft and hard landscapingelements, but we’ll craft an outdoor living space that looks amazing, while is also functionaland practical for your family to use. 
                    From outdoor design elements like paving, decking andEasigrass artificial turf to luxurious seating and dedicated barbecue areas, we can do it all.
                    So wherever you’re based in the UAE, contact Dubai-Landscapes today to find out moreabout our range of landscaping services and bespoke gardens.
                    Message us on WhatsAppand a member of our team will be in touch
                    </p>
                </section>
            </body>
}