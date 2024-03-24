import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar() {
    //const path = window.location.pathname
    return (<nav className="nav">
        <Link to="/" className="dubai-landscapes"> Dubai Landscapes</Link>
        <ul>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
            <ActiveLink to="/gallery">Gallery</ActiveLink>
            <ActiveLink to="/faqs">FAQs</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </ul>
    </nav>
    )
}

function ActiveLink ({to, children,...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}