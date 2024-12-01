import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Add authentication logic here
        navigate('/');
    };

    return (
        <div 
            className="flex justify-center items-center h-screen bg-cover bg-center bg-black md:bg-[url('https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg')]" 
        >
            <div className="bg-black bg-opacity-80 p-10 max-w-md w-full text-white text-center rounded-xl shadow-lg">
                <h1 className="text-4xl mb-6 font-semibold">Masuk</h1>
                <form onSubmit={handleLogin} className="flex flex-col space-y-6">
                    <input
                        type="email"
                        placeholder="Email atau nomor ponsel"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <input
                        type="password"
                        placeholder="Sandi"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-4 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button type="submit" className="p-4 bg-red-600 rounded font-semibold hover:bg-red-700 transition">Masuk</button>
                </form>
                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate('/use-login-code')} className="text-red-600 hover:underline">Gunakan Kode Masuk</button>
                    <a href="/" className="text-red-600 hover:underline">Lupa sandi?</a>
                </div>
                <div className="mt-6">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember">Ingat saya</label>
                </div>
                <div className="mt-6">
                    Baru di Netflix? <a href="/signup" className="text-red-600 hover:underline">Daftar sekarang.</a>
                </div>
                <p className="mt-6 text-sm">
                    Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot. <a href="/" className="text-red-600 hover:underline">Pelajari selengkapnya</a>.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
