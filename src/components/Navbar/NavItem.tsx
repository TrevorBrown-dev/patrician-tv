import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
interface NavItemProps {
    to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
    const location = useLocation();
    return (
        <div className={`nav-item ${location.pathname === to ? "current" : ""}`}>
            <Link className="text" to={to}>{children}</Link>
            <div className="marker"></div>
        </div>
    );
}