'use client';

import React from 'react'
import AdminNav from '@/components/Navbar/AdminNav'
import { usePathname } from 'next/navigation';


function layout({ children }) {
	const pathname = usePathname();

	const SESSION_TIMEOUT = 24 * 60 * 10000;
	const token = sessionStorage.getItem('token');
	useEffect(() => {

		if (token === undefined || token === null) {
			route.push('/admin');
		}

		const sessionStartTime = sessionStorage.getItem('sessionStartTime');
		const currentTime = Date.now();

		if (sessionStartTime && currentTime - sessionStartTime > SESSION_TIMEOUT) {

			sessionStorage.removeItem('token');
			sessionStorage.removeItem('sessionStartTime');
			route.push('/admin');
		}
	}, [ pathname ]);

	return (
		<>
			{pathname !== '/admin' ? <AdminNav /> : null}
			<div>{children}</div>
		</>
	)
}

export default layout