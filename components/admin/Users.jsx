'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaTimesCircle, FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie'

const Users = () => {
	const [ users, setUsers ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);
	const router = useRouter();
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

	const token = Cookies.get('token');
	const sessionStartTime = Cookies.get('sessionStartTime');

	useEffect(() => {
		if (!token || !sessionStartTime) {
			router.push('/admin');
			return;
		}

		const fetchUsers = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/admin/users`, {
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
	}, [ router ]);

	if (loading) return <div className="p-6 text-center text-blue-600">Loading users...</div>;
	if (error) return <div className="p-6 text-center text-red-600">Error: {error}</div>;

	return (
		<div className="container pt-8 mx-auto">
			<h1 className="text-3xl font-bold mb-6 text-center">Admin Users</h1>
			{users?.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
						<thead className="bg-gray-100 text-gray-700 text-left">
							<tr>
								<th className="py-3 px-4">Name</th>
								<th className="py-3 px-4">Email</th>
								<th className="py-3 px-4">Role</th>
								<th className="py-3 px-4">Verified</th>
								<th className="py-3 px-4">Active</th>
								<th className="py-3 px-4">Created At</th>
							</tr>
						</thead>
						<tbody>
							{users?.map((user) => (
								<tr key={user?._id} className="border-t hover:bg-gray-50">
									<td className="py-3 px-4 flex items-center gap-2 capitalize">
										{/* <FaUser className="text-blue-500" /> */}
										{user?.firstName}
									</td>
									<td className="py-3 px-4">{user?.email}</td>
									<td className="py-3 px-4 capitalize">{user?.role}</td>
									<td className="py-3 px-4">
										{user?.isEmailVerified ? (
											<FaCheckCircle className="text-green-500" />
										) : (
											<FaTimesCircle className="text-red-500" />
										)}
									</td>
									<td className="py-3 px-4">
										{user?.isActive ? (
											<FaCheckCircle className="text-green-500" />
										) : (
											<FaTimesCircle className="text-red-500" />
										)}
									</td>
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

export default Users;
