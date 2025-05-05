import Image from 'next/image'
import React from 'react'

function Footer() {
	return (
		<>
			<footer className="bg-white pt-12">
				<div className="container flex flex-col-reverse xl:flex-row gap-y-14 xl:gap-10 pb-10">
					<div className='w-full lg:w-1/3'>
						<div className="flex items-center gap-2 mb-4">
							<div className="relative w-full">
								<Image
									src="/logo/logo.png"
									alt="GARSB Logo"
									width={390}
									height={112}
									className="object-contain"
								/>
							</div>
						</div>

						<div className="mb-4">
							<h4 className="font-semibold mt-6 mb-2 text-xl text-red-600">About Us</h4>
							<p className="text-lg text-gray-600 w-60">We provide you the service like your home.</p>
							<p className="text-sm text-gray-600 mt-4">admissions.delhi@garsb.com</p>
						</div>

						<div>
							<h4 className="font-semibold mt-12 mb-2 text-green-600">Follow Us:</h4>
							<div className="flex gap-3">
								<a href="#" className="bg-blue-600 text-white py-1 px-3 rounded">
									f
								</a>
								<a href="#" className="bg-blue-400 text-white py-1 px-3 rounded">
									t
								</a>
								<a href="#" className="bg-red-600 text-white py-1 px-3 rounded">
									y
								</a>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 w-full xl:w-2/3">
						<div>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Delhi Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">Delhi, Dwarka Sector -21 , South Delhi - 110078</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.abroad5@gmail.com</p>
									<p className="text-sm text-gray-600">+91 931-5271-011 </p>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Odisha Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">138, Kodabaruan, Charampa, Bhadrak, Odisha, 756101</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.delhi@garsb.com</p>
									<p className="text-sm text-gray-600">+91 9110-548-675</p>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Hyderabad Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">Balanagar, Hyderabad, Telangana, 500018</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.abroad5@gmail.com</p>
									<p className="text-sm text-gray-600">+91 798-1283-457</p>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Bangladesh Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">
									4th Floor, Kuril, Vatara, Ka-24 Progati Sarani Rd, Dhaka 1229, Bangladesh
								</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.bangladesh@garsb.com</p>
									<p className="text-sm text-gray-600">+91 798-1283-457</p>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Pakistan Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">
									Building 224, Sector U, Third floor DHA Ph 8. main boulevard, Commercial Broadway, Lahore, pakistan
								</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.abroad5@gmail.com</p>
									<p className="text-sm text-gray-600 mb-4">+91 931-5271-011</p>
								</div>
							</div>
						</div>

						<div className='h-full'>
							<h4 className="font-bold mb-3 text-red-600 text-xl">UK Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">258- 262 Romford Road -E7 9HZ</p>
								<div>
									<p className="text-sm text-gray-600 mb-1">admissions.abroad5@gmail.com</p>
									<p className="text-sm text-gray-600 mb-4">+91 798-1283-457</p>
								</div>
							</div>
						</div>

						<div className='sm:col-span-2'>
							<h4 className="font-bold mb-3 text-red-600 text-xl">Chennai Office</h4>
							<div className='flex flex-col justify-between gap-2'>
								<p className="text-sm text-gray-600 mb-2">
									New No. 9, Balaji Apartments, Plot No. 2, Mancholai 1st St, behind Jaya TV, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032
								</p>
								<p className="text-sm text-gray-600 mb-1">admissions.abroad5@gmail.com</p>
								<p className="text-sm text-gray-600 mb-4">+91 9110-548-675</p>
							</div>
						</div>
					</div>
				</div >
				<hr />
				<div className="text-center text-green-600 py-6">
					© 2022 GARSB Dstination Pvt. Ltd. All rights reserved.
				</div>
			</footer >
		</>
	)
}

export default Footer