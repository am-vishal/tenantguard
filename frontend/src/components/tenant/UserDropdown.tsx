import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const UserDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('tenantguard') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('tenantguard');
        navigate('/');
        window.location.reload();
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (open) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setOpen(prev => !prev)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform text-sm font-semibold"
            >
                Dashboard
                <FaChevronDown className="inline ml-2" />
            </button>

            {open && (
                <div className="absolute right-0 z-10 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div>{user?.name || 'Admin'}</div>
                        <div className="font-medium truncate">{user?.email || 'admin@test.com'}</div>
                    </div>

                    {/* Links */}
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <button
                                onClick={() => navigate('/admin')}
                                className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                            >
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate('/account-setting')}
                                className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                            >
                                Settings
                            </button>
                        </li>
                        {/* <li>
                            <button
                                onClick={() => navigate('/earnings')}
                                className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                            >
                                Earnings
                            </button>
                        </li> */}
                    </ul>

                    {/* Sign out */}
                    <div className="py-2">
                        <button
                            onClick={handleLogout}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;