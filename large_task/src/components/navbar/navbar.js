import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import logo from '../../assets/dubai_logo.webp';

export default function Navbar() {
    // This nav will feature on each page in the same layout
    return (<nav className="nav">
        {/* Have the company logo and name with the Nav to increase brand recognition */}
        <div className='logo_name'>
        <img src={logo} alt='Logo  which is a blend of green and white that features simple depictions of high rise buildings'></img>
        <p className='logo_title'>Dubai Landscapes</p>
        </div>
        <ul>
            {/* Active link */}
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
            <ActiveLink to="/gallery">Gallery</ActiveLink>
            <ActiveLink to="/faqs">FAQs</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </ul>
    </nav>
    )
}
//React Router dom allows for smoother nav transitions and shorter page loading time
//Changing page will not reload the nav elemnts 
function ActiveLink ({to, children,...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}