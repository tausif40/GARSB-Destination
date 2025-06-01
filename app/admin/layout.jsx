'use client';

import React from 'react'
import AdminNav from '@/components/Navbar/adminNav'
import { usePathname } from 'next/navigation';


function layout({ children }) {
	const pathname = usePathname();

	return (
		<>
			{pathname !== '/admin' ? <AdminNav /> : null}
			<div>{children}</div>
		</>
	)
}

export default layout