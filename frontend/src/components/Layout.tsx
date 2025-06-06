import { Link, Outlet, useNavigate } from 'react-router-dom';

let clickCount = 0;
let clickTimer: ReturnType<typeof setTimeout>;

const handleTripleClick = () => {
    const navigate = useNavigate();
    clickCount++;
    navigate('/tenantguard')
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
        clickCount = 0;
    }, 400); // reset after 400ms of inactivity

    if (clickCount === 3) {
        localStorage.removeItem('tenantguard_user');
        localStorage.removeItem('tenantguard_admin');
        window.location.reload(); // optional: refresh to reset UI
    }
};

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <h1
                    className="text-xl font-bold text-blue-700 cursor-pointer"
                    onClick={handleTripleClick}
                >
                    TenantGuard
                </h1>
                <nav className="flex gap-6">
                    <Link to="" className="text-blue-700 hover:text-blue-900">Home</Link>
                    <Link to="about" className="text-blue-700 hover:text-blue-900">About</Link>
                    <Link to="contact" className="text-blue-700 hover:text-blue-900">Contact</Link>
                </nav>
            </header>

            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white text-center py-4 shadow-inner text-sm text-gray-500">
                © {new Date().getFullYear()} TenantGuard. All rights reserved.
            </footer>
        </div>
    );
}
