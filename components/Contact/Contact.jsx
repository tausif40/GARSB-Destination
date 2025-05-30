"use client"

import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

function Contact() {

	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [ loading, setLoading ] = useState(false)
	const [ success, setSuccess ] = useState(null)

	const baseURL = process.env.NEXT_PUBLIC_API_URL;

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[ name ]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		setSuccess(null)

		try {
			const res = await axios.post(`${baseURL}/contact-us`, formData)
			// console.log(res);
			setSuccess('Message sent successfully!')
			setFormData({ name: '', email: '', message: '' })
		} catch (error) {
			setSuccess('Something went wrong. Please try again.')
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<section className="relative overflow-hidden min-h-screen">
			<div className="absolute inset-0 bg-gradient-to-r from-[#f1fff3] via-[#ededfc] to-[#fac2ca] -z-10"></div>
			<div className="container mx-auto px-4 py-16 md:py-24 mt-20">
				<div className="flex flex-col md:flex-row items-center justify-between">
					{/* Contact Form */}
					<div className="w-full md:w-1/2 mb-10 md:mb-0 z-20">
						<form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0 space-y-4">
							<div>
								<input
									type="text"
									name="name"
									placeholder="NAME:"
									value={formData.name}
									onChange={handleChange}
									className="w-full p-3 border border-blue-500 rounded bg-white"
									required
								/>
							</div>
							<div>
								<input
									type="email"
									name="email"
									placeholder="EMAIL ADDRESS:"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-3 border border-blue-500 rounded bg-white"
									required
								/>
							</div>
							<div>
								<textarea
									name="message"
									placeholder="YOUR MESSAGE:"
									rows={6}
									value={formData.message}
									onChange={handleChange}
									className="w-full p-3 border border-blue-500 rounded bg-white"
									required
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="bg-blue-700 text-white py-2 px-6 rounded uppercase font-medium"
									disabled={loading}
								>
									{loading ? "Sending..." : "Send Message"}
								</button>
							</div>
							{success && (
								<p className={`text-sm ${success.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
									{success}
								</p>
							)}
						</form>
					</div>

					{/* Illustration */}
					<div className="w-full md:w-1/2 relative h-[500px]">
						<Image
							src="/contact.png"
							alt="Customer Support Illustration"
							fill
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
