'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', { email, password, redirect: false })
            if (res?.error) {
                alert(res.error)
            }
            else {
                alert('login successful')
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <div className="mt-4 space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Continue with Google
                    </button>
                    <div className="text-center text-sm text-gray-500">
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <div className='text-center text-sm text-gray-500'>
                        Don't have account   <Link href="/register" className='text-blue-500'>SignUp</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}