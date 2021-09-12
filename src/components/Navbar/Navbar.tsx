import { NavItem } from "./NavItem";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/spotlight">Spotlight</NavItem>
            <NavItem to="/thecult">The Cult</NavItem>
        </nav>
    );
}