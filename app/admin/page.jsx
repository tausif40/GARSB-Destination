"use client"

import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import axios from "axios"

function page() {
	const route = useRouter();
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ showPassword, setShowPassword ] = useState(false)
	const [ error, setError ] = useState("")
	const [ loading, setLoading ] = useState(false);

	const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
	const SESSION_TIMEOUT = 24 * 60 * 10000;

	useEffect(() => {
		const sessionStartTime = sessionStorage.getItem('sessionStartTime');
		const currentTime = Date.now();
		if (sessionStartTime && currentTime - sessionStartTime > SESSION_TIMEOUT) {

			sessionStorage.removeItem('token');
			sessionStorage.removeItem('sessionStartTime');
			route.push('/admin');
		}
	}, [ route ]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const data = { email, password };
		console.log(data);

		try {
			await axios.post(`${BASE_URL}/admin/admin-logIn`, data, {
				headers: { 'Content-Type': 'application/json' }
			}).then((response) => {
				console.log(response);
				console.log('Login successful:', response);
				sessionStorage.setItem('token', response?.data?.tokens?.access?.token);
				sessionStorage.setItem('sessionStartTime', Date.now());
				route.push('/admin/dashboard');
			}).catch((err) => {
				console.log(err);
				setError('Login failed! Please check your email & password.');
			});
		} catch (err) {
			setError('Login failed! Please check your email & password.');
			console.error('Login error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1fff3] via-[#ededfc] to-[#fac2ca]">
			<div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-6">
				<h2 className="text-2xl font-bold text-center">Admin Login</h2>
				<form onSubmit={handleSubmit} className="">
					<div>
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="admin@example.com"
							required
						/>
					</div>
					<div className="relative mt-4">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							required
						/>
						<button
							type="button"
							className="absolute right-3 top-9 text-gray-500"
							onClick={() => setShowPassword(!showPassword)}
							tabIndex={-1}
						>
							{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
						</button>
					</div>
					{error && <p className="text-sm text-red-600">{error}</p>}
					<Button type="submit" className="w-full mt-6" disabled={loading}>
						{loading ? 'Login..' : 'Login'}
					</Button>
				</form>
			</div>
		</div>
	)
}


export default page