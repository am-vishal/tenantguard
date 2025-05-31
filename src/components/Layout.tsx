import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar */}
            <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-700">TenantGuard</h1>
                <nav className="flex gap-6">
                    <Link to="/" className="text-blue-700 hover:text-blue-900">Home</Link>
                    <Link to="/about" className="text-blue-700 hover:text-blue-900">About</Link>
                    <Link to="/contact" className="text-blue-700 hover:text-blue-900">Contact</Link>
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
