import Image from 'next/image'
import React from 'react'

function Hero() {
	return (
		<>
			<section className="relative h-[75vh]">
				<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
				<div className="container h-[75vh] relative z-20 flex flex-col md:flex-row items-end">
					<div className="w-full md:w-3/5 py-6 md:py-16 text-white ">
						<ul className="space-y-3 list-disc pl-6 md:mt-16">
							<li className="text-xl sm:text-2xl md:text-3xl font-semibold">Admissions Assistance</li>
							<li className="text-xl sm:text-2xl md:text-3xl font-semibold">Free Profiles Evaluation</li>
							<li className="text-xl sm:text-2xl md:text-3xl font-semibold">100% Visa Assistance</li>
							<li className="text-xl sm:text-2xl md:text-3xl font-semibold">Scholarship Assistance</li>
							<li className="text-xl sm:text-2xl md:text-3xl font-semibold">Admissions from 80+ Universities</li>
						</ul>
					</div>
					{/* <div className="w-full md:w-2/">
						<div className="relative h-full min-h-[300px]">
							<Image
								src="/img/girl-bg.png"
								alt="Student with books"
								fill
								className="object-cover object-center"
							/>
						</div>
					</div> */}
				</div>
				<Image
					src="/img/heroBg.jpeg"
					alt="London Background"
					fill
					className="object-cover -z-10"
					priority
				/>
			</section>
		</>
	)
}

export default Hero