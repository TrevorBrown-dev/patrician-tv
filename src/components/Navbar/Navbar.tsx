import { NavItem } from "./NavItem";

const NavItems: React.FC = () => {
    return (
        <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/spotlight">Spotlight</NavItem>
            <NavItem to="/thecult">The Cult</NavItem>
        </>
    );
}
export const NavbarHorizontal: React.FC = () => {
    return <nav className="navbar-horizontal">
        <NavItems />
    </nav>
}

export const NavbarVertical: React.FC = () => {
    return (
        <nav className="navbar">
            <NavItems />
        </nav>
    );
}