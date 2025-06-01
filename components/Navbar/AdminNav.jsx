"use client"

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


function AdminNav() {
	const route = useRouter()
	// const headerData = {
	// 	contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
	// }

	const handelLogout = () => {
		sessionStorage.clear();
		route.push('/')
	}

	return (
		<header className="w-full bg-white border-b">
			{/* Top Bar */}
			<div className="container mx-auto px-4 py-1 flex flex-wrap items-center justify-between">
				{/* Logo */}
				<Link href='/admin/dashboard'>
					<Image
						src="/logo/logo.png"
						alt="GARSB Logo"
						width={250}
						height={100}
						className="object-contain"
					/>
				</Link>

				{/* Contact Info */}
				{/* <div className=' bg-gray-800  rounded-full text-white flex items-center justify-center cursor-pointer' onClick={handelLogout}>
					<p className=''>Logout &rarr;</p>
				</div> */}
			</div>

		</header>
	)
}

export default AdminNav