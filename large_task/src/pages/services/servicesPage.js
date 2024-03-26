import './services.css';
import image1 from '../../assets/4.jpg';
import image2 from '../../assets/9.jpg';
import image3 from '../../assets/22.jpg';

export default function Services(){
    return  <body className="services_body">
            <h1 className="hero">FOR YOUR PERSONAL OASIS IN THE UAE</h1>
            <h2 className="services_title">Landscaping Services</h2>
            <section className="services_list">
                    <p className="list_title">Our range of landscaping services includes:</p>
                    <ul className="services_list_items">
                        <li>• Gazebos</li>
                        <li>• Pergolas</li>
                        <li>• Decking</li>
                        <li>• Paving</li>
                        <li>• Water Features</li>
                        <li>• Barbecue Areas</li>
                        <li>• And much more!</li>
                    </ul>
                </section>
            <section className="services_content">
                <section className="grid1">
                <img src={image2} className="services_image2" alt="A garden with paving and a gazebo"></img>
                <p className="services_text1">Dubai-Landscapes is one of the most experienced and reliable garden landscaping companies in the UAE. 
                Experts in both soft and hard landscaping, we’re able to do it all, 
                from providing perfect paving to enhancing gardens with flowers and plants that are able to withstand the UAE’s unique climate. 
                Our team is full of local experts who have extensive knowledge of the type of plants that will work best for your outdoor space.
                </p>
                </section>

                <section className="grid2">
                <img src={image1} className="services_image1" alt="A garden with paving leading up to a house"></img>
                <p className="services_text2">Our team can transform every garden or outdoor space, taking on board the unique requirements of our customers.
                We never take a ‘one size fits all’ approach, instead tailoring our services specifically to the needs of our clients.
                </p>
                </section>
                <section className="grid3">
                <img src={image3} className="services_image3" alt="A path with well kept grass next to it"></img>
                <p className="services_text3">A British-owned company, whose entire team is English managed, we always use products that have been manufactured using the highest quality materials. 
                This includes award-winning artificial turf from Easigrass, a product that is 100% British designed as well as child and pet safe.
                Operating across the entirety of Dubai and Abu Dhabi, whatever landscaping services you require, Dubai-Landscapes is here to help. 
                Contact us by Whatsapp, on the phone or by filling out our online form, and a member of our team will be able to help.
                </p>
                </section> 
            </section>
            </body>
}