'use client';

import React, { useEffect } from 'react'
import AdminNav from '@/components/Navbar/AdminNav'
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie'

function layout({ children }) {
	const pathname = usePathname();

	const SESSION_TIMEOUT = 24 * 60 * 10000;
	const token = Cookies.get('token');
	useEffect(() => {

		if (token === undefined || token === null) {
			route.push('/admin');
		}

		const sessionStartTime = Cookies.get('sessionStartTime');
		const currentTime = Date.now();

		if (sessionStartTime && currentTime - sessionStartTime > SESSION_TIMEOUT) {

			Cookies.remove('token');
			Cookies.remove('sessionStartTime');
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