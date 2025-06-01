"use client"

import Link from 'next/link';
import React from 'react'

function Dashboard() {

	// useEffect(() => {
	// 	if (token == null && sessionStartTime == null) {
	// 		navigate('/admin')
	// 		return;
	// 	}
	// }, [])

	return (
		<>
			<div className='h-[87vh] w-full bg-no-repeat object-cover bg-slate-200' style={{ backgroundImage: "url('/assets/img/homeCrouse/bed1.jpeg')", objectFit: "cover" }}>

				<div className='container py-4'>

					<div className=''>
						<p className='text-3xl text-heading font-semibold '>Welcome to admin Panel</p>
					</div>

					<div className='gap-8 mt-12 w-1/2 grid grid-cols-2'>
						<div className='border px-4 pt-2 pb-4 rounded w-72 backdrop-blur-lg bg-background shadow-sm'>
							<p className='text-xl font-lg font-bold text-gray-700'>All users</p>
							<p className='text-text mt-3 mb-4'>Get all users list</p>
							<Link href='/admin/all-users'>
								<button className='bg-gray-800 px-4 py-2 rounded-md text-white'>
									Users List
								</button>
							</Link>
						</div>

						<div className='border px-4 pt-2 pb-4 rounded w-72 backdrop-blur-lg bg-background shadow-sm'>
							<p className='text-xl font-lg font-bold text-gray-700'>Consultation</p>
							<p className='text-text mt-3 mb-4'>View the User Consultation</p>
							<Link href='/admin/consultation'>
								<button className='bg-gray-800 px-4 py-2 rounded-md text-white'>
									Consultation List
								</button>
							</Link>
						</div>

						<div className='border px-4 pt-2 pb-4 rounded w-72 backdrop-blur-lg bg-background shadow-sm'>
							<p className='text-xl font-lg font-bold text-gray-700'>Contact us</p>
							<p className='text-text mt-3 mb-4'>User enquiry with contact us page</p>
							<Link href='/admin/contact-us'>
								<button className='bg-gray-800 px-4 py-2 rounded-md text-white'>
									Contact Us List
								</button>
							</Link>
						</div>
					</div >
				</div >
			</div>

		</>
	)
}

export default Dashboard