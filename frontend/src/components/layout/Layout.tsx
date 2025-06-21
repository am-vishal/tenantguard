import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import UserDropdown from '../tenant/UserDropdown';

export default function Layout() {
    const navigate = useNavigate();
    const clickCount = useRef(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const user = JSON.parse(localStorage.getItem('tenantguard') || '{}');
    const isAdmin = user.role === 'admin';

    const handleClick = () => {
        clickCount.current += 1;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            if (clickCount.current === 1) {
                navigate('/'); // Single click → go to homepage
            } else if (clickCount.current === 2) {
                localStorage.removeItem('tenantguard');
                window.location.reload(); // Optional reload after clearing
            }
            clickCount.current = 0; // reset counter
        }, 400); // 400ms window to detect double click
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 font-sans">
            {/* <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center"> */}
            <header className="bg-white/70 backdrop-blur-md shadow-lg px-8 py-4 flex justify-between items-center sticky top-0 z-50">
                <h1
                    className="text-2xl font-extrabold text-blue-700 cursor-pointer tracking-tight"
                    onClick={handleClick}
                >
                    Tenant<span className="text-purple-600">Guard</span>
                </h1>
                <nav className="flex gap-6 items-center">
                    <Link
                        to=""
                        className="text-blue-700 hover:text-purple-700 hover:underline font-medium transition-all"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        className="text-blue-700 hover:text-purple-700 hover:underline font-medium transition-all"
                    >
                        About
                    </Link>
                    <Link
                        to="contact"
                        className="text-blue-700 hover:text-purple-700 hover:underline font-medium transition-all"
                    >
                        Contact
                    </Link>
                    {isAdmin && (
                        <UserDropdown />
                        // <Link
                        //     to="admin"
                        //     className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform text-sm font-semibold"
                        // >
                        //     Admin Dashboard
                        // </Link>
                    )}
                </nav>
            </header>

            {/* Page Content */}
            <main className="flex-grow px-6 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white shadow-inner py-4 text-center text-sm text-gray-600">
                <p>
                    © {new Date().getFullYear()} <span className="font-semibold text-blue-600">TenantGuard</span>. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
