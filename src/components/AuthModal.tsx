import React, { useState, useEffect } from 'react';
import {
    isValidEmail,
    isValidName,
    isValidPassword
} from '../utils/validators';
import Loader from './Loader';

type AuthModalProps = {
    type: 'login' | 'signup';
    onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            if (type === 'signup') {
                await new Promise((r) => setTimeout(r, 1500));
                if (!isValidName(name)) {
                    return setError('Name must be at least 2 characters.');
                }
                if (!isValidEmail(email)) {
                    return setError('Invalid email format.');
                }
                if (!isValidPassword(password)) {
                    return setError(
                        'Password must be at least 6 characters and include letters and numbers.'
                    );
                }

                // Save signed-up user data including password (for demo only; do not store passwords in plaintext in production)
                localStorage.setItem(
                    'tenantguard_user',
                    JSON.stringify({ email, name, password })
                );
                setSuccess('Signup successful!');
                onClose();

            } else if (type === 'login') {
                // Retrieve signed-up user data from localStorage
                const storedUser = localStorage.getItem('tenantguard_user');
                let storedEmail = '';
                let storedPassword = '';

                if (storedUser) {
                    try {
                        const user = JSON.parse(storedUser);
                        storedEmail = user.email;
                        storedPassword = user.password;
                    } catch {
                        // If parsing fails, fallback to hardcoded admin credentials
                        storedEmail = '';
                        storedPassword = '';
                    }
                }

                // Validate credentials: match stored user or fallback to admin
                if (
                    (email === storedEmail && password === storedPassword) ||
                    (email === 'admin@test.com' && password === 'admin123')
                ) {
                    localStorage.setItem('tenantguard_admin', 'true');
                    setSuccess('Login successful!');
                    onClose();
                } else {
                    setError('Invalid credentials');
                    localStorage.setItem('tenantguard_admin', 'false');
                }
            }
        } catch (error) {
            console.error("ERROR:> ", error)
        } finally {
            setLoading(false);
        }
    }

    return (
        loading ? <Loader /> :
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>

                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {type === 'login' ? 'Login to TenantGuard' : 'Sign Up for TenantGuard'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {type === 'signup' && (
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full px-4 py-2 border rounded"
                            />
                        )}
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded"
                        />
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        {success && <div className="text-green-600 text-sm">{success}</div>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            {type === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default AuthModal;
