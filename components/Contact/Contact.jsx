import Image from 'next/image'
import React from 'react'

function Contact() {
	return (
		<>
			<section className="relative overflow-hidden h-screen">
				<div className="absolute inset-0 bg-gradient-to-r from-[#f1fff3] via-[#ededfc] to-[#fac2ca] -z-10"></div>
				<div className="container mx-auto px-4 py-16 md:py-24 mt-20">
					<div className="flex flex-col md:flex-row items-center justify-between">
						{/* Contact Form */}
						<div className="w-full md:w-1/2 mb-10 md:mb-0 z-20">
							<form className="max-w-md mx-auto md:mx-0 space-y-4">
								<div>
									<input
										type="text"
										placeholder="NAME:"
										className="w-full p-3 border border-blue-500 rounded bg-white"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="EMAIL ADRESS:"
										className="w-full p-3 border border-blue-500 rounded bg-white"
									/>
								</div>
								<div>
									<textarea
										placeholder="YOUR MESSAGE:"
										rows={6}
										className="w-full p-3 border border-blue-500 rounded bg-white"
									></textarea>
								</div>
								<div>
									<button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded uppercase font-medium">
										Send Message
									</button>
								</div>
							</form>
						</div>

						{/* Illustration */}
						<div className="w-full md:w-1/2">
							<div className="absolute right-0 bottom-0 h-[500px] md:w-[780px]">
								<Image
									src="/contact.png"
									alt="Customer Support Illustration"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact