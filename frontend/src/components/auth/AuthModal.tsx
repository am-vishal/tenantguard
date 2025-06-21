import React, { useState } from 'react';
import {
    handleLimitedDigitsInput,
    isValidAadhaar,
    isValidEmail,
    isValidEmailOrPhone,
    isValidName,
    isValidPassword,
    isValidPhone,
    useScrollBlock
} from '../../utils/validators';
import Loader from '../shared/Loader';
import { IoMdClose } from 'react-icons/io';

type AuthModalProps = {
    type: 'login' | 'signup';
    onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    useScrollBlock();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            if (type === 'signup') {
                await new Promise((r) => setTimeout(r, 1500));

                if (!isValidName(name)) {
                    return setError('Name must be at least 2 characters long.');
                }
                if (!isValidEmail(email)) {
                    return setError('Please enter a valid email address.');
                }
                if (!isValidPassword(password)) {
                    return setError('Password must be at least 6 characters and include both letters and numbers.');
                }
                if (!isValidPhone(phone)) {
                    return setError('Please enter a valid 10-digit phone number.');
                }
                if (!isValidAadhaar(aadhaar)) {
                    return setError('Please enter a valid 12-digit Aadhaar number.');
                }

                const userData = {
                    name,
                    email,
                    phone,
                    aadhaar,
                    password,
                    role: 'admin'
                };

                localStorage.setItem('tenantguard', JSON.stringify(userData));
                setSuccess('Signup successful!');
                setTimeout(() => onClose(), 1000);

            } else if (type === 'login') {
                if (!isValidEmailOrPhone(emailOrPhone)) {
                    return setError('Enter a valid email or 10-digit mobile number.');
                }
                if (!isValidPassword(password)) {
                    return setError('Please enter valid password.');
                }

                const stored = localStorage.getItem('tenantguard');
                const user = stored ? JSON.parse(stored) : null;

                const isAdminLogin = emailOrPhone === 'admin@test.com' && password === 'admin123';
                const isUserMatch =
                    user &&
                    ((emailOrPhone === user.email || emailOrPhone === user.phone) && password === user.password);

                if (isUserMatch || isAdminLogin) {
                    const loginData = {
                        name: isAdminLogin ? 'Admin' : user.name,
                        email: emailOrPhone,
                        phone: isAdminLogin ? '9876543210' : user.phone,
                        aadhaar: isAdminLogin ? '1234 5678 9101' : user.aadhaar,
                        role: isAdminLogin ? 'admin' : user.role,
                        password
                    };

                    localStorage.setItem('tenantguard', JSON.stringify(loginData));
                    setSuccess('Login successful!');
                    setTimeout(() => window.location.reload(), 800);
                } else {
                    setError('Invalid credentials. Please try again.');
                    localStorage.removeItem('tenantguard');
                }
            }
        } catch (error) {
            console.error("ERROR:>", error);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-2">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 cursor-pointer"
                >
                    <IoMdClose />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                    {type === 'login' ? 'Login' : 'Sign Up'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {type === 'signup' && (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Full Name"
                                autoComplete="name"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="number"
                                name='phone'
                                value={phone}
                                onChange={(e) => handleLimitedDigitsInput(e.target.value, 10, setPhone)}
                                placeholder="Phone Number (10 digits)"
                                autoComplete="tel"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="number"
                                name='aadhaar'
                                value={aadhaar}
                                onChange={(e) => handleLimitedDigitsInput(e.target.value, 12, setAadhaar)}
                                placeholder="Aadhar Number (12 digits)"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="email"
                                name='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                autoComplete="email"
                                className="w-full px-4 py-2 border rounded"
                            />
                        </>
                    )}

                    {type === 'login' && (
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            placeholder="Email or Phone Number"
                            autoComplete="username"
                            className="w-full px-4 py-2 border rounded"
                        />
                    )}

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete="new-password"
                            className="w-full px-4 py-2 border rounded pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? '👁️' : '🙈'}
                        </button>
                    </div>

                    <div className="min-h-[1.5rem] text-sm">
                        {error && <div className="text-red-500">{error}</div>}
                        {!error && success && <div className="text-green-600">{success}</div>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading && <Loader isLineLoader />}
                        {type === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;