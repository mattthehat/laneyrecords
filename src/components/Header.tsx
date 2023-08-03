import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to={`/`} title="Hoempage" className="nav__brand">
                    <Logo />
                </Link>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to={`/about`} className="nav-list__link">
                            about
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
