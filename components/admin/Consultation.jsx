'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaTimesCircle, FaUser } from 'react-icons/fa';

const Consultation = () => {
	const [ users, setUsers ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);
	const [ isMounted, setIsMounted ] = useState(false);
	const router = useRouter();
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		setIsMounted(true); // wait until client-side
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const token = sessionStorage.getItem('token');
		const sessionStartTime = sessionStorage.getItem('sessionStartTime');

		if (!token || !sessionStartTime) {
			router.push('/admin');
			return;
		}

		const fetchUsers = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/admin/consultation`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				});
				console.log(response);
				setUsers(response?.data?.user?.results);
			} catch (err) {
				setError(err.message || 'Failed to fetch users');
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, [ isMounted, BASE_URL, router ]);

	if (!isMounted) return null; // ❗ prevent mismatched HTML
	if (loading) return <div className="p-6 text-center text-blue-600">Loading users...</div>;
	if (error) return <div className="p-6 text-center text-red-600">Error: {error}</div>;

	return (
		<div className="container pt-8 mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-center">Consultation Details</h1>
			{users?.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
						<thead className="bg-gray-100 text-gray-700 text-left">
							<tr>
								<th className="py-3 px-4">Name</th>
								<th className="py-3 px-4">Email</th>
								<th className="py-3 px-4">Mobile</th>
								<th className="py-3 px-4">Interested Course</th>
								<th className="py-3 px-4">Created At</th>
							</tr>
						</thead>
						<tbody>
							{users?.map((user) => (
								<tr key={user?._id} className="border-t hover:bg-gray-50">
									<td className="py-3 px-4 capitalize">{user?.name}</td>
									<td className="py-3 px-4">{user?.email}</td>
									<td className="py-3 px-4">{user?.mobileNumber}</td>
									<td className="py-3 px-4">{user?.interestedCouse}</td>
									<td className="py-3 px-4 text-sm text-gray-500">
										{new Date(user?.createdAt).toLocaleString()}
									</td>
								</tr>
							))}
						</tbody>
					</table>

				</div>
			) : (
				<p className="text-center text-gray-500">No users found.</p>
			)}
		</div>
	);
};

export default Consultation;
