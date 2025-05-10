import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <nav style={{ marginBottom: '1rem' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    );
}
