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
} from '../utils/validators';
import Loader from './Loader';
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

                localStorage.setItem('tenantguard_user', JSON.stringify({ email, phone, name, password }));
                setSuccess('Signup successful!');
                setTimeout(() => onClose(), 1000);

            } else if (type === 'login') {
                if (!isValidEmailOrPhone(emailOrPhone)) {
                    return setError('Enter a valid email or 10-digit mobile number.');
                }
                if (!isValidPassword(password)) {
                    return setError('Please enter valid password.');
                }

                // Retrieve signed-up user data
                const storedUser = localStorage.getItem('tenantguard_user');
                let storedEmail = '';
                let storedPhone = '';
                let storedPassword = '';

                if (storedUser) {
                    try {
                        const user = JSON.parse(storedUser);
                        storedEmail = user.email;
                        storedPhone = user.phone;
                        storedPassword = user.password;
                    } catch {
                        storedEmail = '';
                        storedPhone = '';
                        storedPassword = '';
                    }
                }

                const isMatch = (isValidEmailOrPhone(emailOrPhone) && emailOrPhone === storedEmail && password === storedPassword) ||
                    (emailOrPhone === 'admin@test.com' && password === 'admin123');
                if (isMatch) {
                    localStorage.setItem('tenantguard_admin', 'true');
                    setSuccess('Login successful!');
                    window.location.reload();
                } else {
                    setError('Invalid credentials. Please try again.');
                    localStorage.setItem('tenantguard_admin', 'false');
                }
            }
        } catch (error) {
            console.error("ERROR:>", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Full Name"
                                    autoComplete="name"
                                    className="w-full px-4 py-2 border rounded"
                                />
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => handleLimitedDigitsInput(e.target.value, 10, setPhone)}
                                    placeholder="Phone Number (10 digits)"
                                    autoComplete="tel"
                                    className="w-full px-4 py-2 border rounded"
                                />
                                <input
                                    type="number"
                                    id="aadhaar"
                                    name="aadhaar"
                                    value={aadhaar}
                                    onChange={(e) => handleLimitedDigitsInput(e.target.value, 12, setAadhaar)}
                                    placeholder="Aadhar Number (12 digits)"
                                    className="w-full px-4 py-2 border rounded"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
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
                                id="emailOrPhone"
                                name="emailOrPhone"
                                value={emailOrPhone}
                                autoComplete='username'
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                placeholder="Email or Phone Number"
                                className="w-full px-4 py-2 border rounded"
                            />
                        )}
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
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
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
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
                            className={`w-full flex items-center justify-center cursor-pointer gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading && <Loader isLineLoader />}
                            {type === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                </div >
            </div >
        </>
    );
};

export default AuthModal;
