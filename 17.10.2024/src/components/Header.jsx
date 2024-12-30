import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <nav className="header__links">
                <NavLink to="/" className="header__link">Home</NavLink>
                <NavLink to="/cart" className="header__link">
                    Cart
                    <span className="count"></span>
                </NavLink>
            </nav>
        </header>
    )
}