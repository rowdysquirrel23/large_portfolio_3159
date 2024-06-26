//IMport all images and css file
import gallery1 from '../../assets/gallery_images/7.webp';
import gallery2 from '../../assets/gallery_images/1.webp';
import gallery3 from '../../assets/gallery_images/12.webp';
import gallery4 from '../../assets/gallery_images/13.webp';
import gallery5 from '../../assets/gallery_images/16.webp';
import gallery6 from '../../assets/gallery_images/17.webp';
import gallery7 from '../../assets/gallery_images/18.webp';
import gallery8 from '../../assets/gallery_images/23.webp';
import gallery9 from '../../assets/gallery_images/24.webp';
import './gallery.css';



export default function Gallery(){
    return  <body className="gallery_body">
                    {/* Hero for the gallery page */}
                    <h1 className="hero_text">GRAB A GLIMPSE OF OUR WORK</h1>
                {/* Section for the gallery title and text description */}
                <section className="gallery_text">
                    <h2 className="gallery_projects">Our Projects</h2>
                    <p className="gallery_description">Over the years, the team here at Dubai-Landscapes has worked on a whole host of projectsthroughout the UAE, helping to enhance the outdoor space of numerous clients in theregion. 
                    While we could tell you about our best work, we thought it would be better to show youinstead. 
                    On this page, you’ll find our projects gallery where you can browse through some of our recent projects.
                </p>
                </section>
                {/* A section containing all of the gallery images for this page, whith corresponding alt tags */}
                <section className="image_gallery">
                    <img src={gallery1} className="galleryimage1" alt="A garden with a putting green on it"></img>
                    <img src={gallery2} className="galleryimage2" alt="A patch of grass infront of a modern building"></img>
                    <img src={gallery3} className="galleryimage3" alt="Palm trees in some grass and paving"></img>
                    <img src={gallery4} className="galleryimage4" alt="A swimming pool in a garden"></img>
                    <img src={gallery5} className="galleryimage5" alt="A gazebo next to a pool and grass"></img>
                    <img src={gallery6} className="galleryimage6" alt="A pool with frsh grass around it"></img>
                    <img src={gallery7} className="galleryimage7" alt="A path with grass and trees around it"></img>
                    <img src={gallery8} className="galleryimage8" alt="A pool overlooking a golf course"></img>
                    <img src={gallery9} className="galleryimage9" alt="Tiling in a garden"></img>
                </section>
            </body>
}