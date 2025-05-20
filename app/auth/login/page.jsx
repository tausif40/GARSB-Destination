"use client"

import React from 'react'
import { signIn, useSession } from 'next-auth/react'

function page() {
	const session = useSession();
	console.log(session);

	return (
		<div onClick={() => signIn('google')} className='border p-2 cursor-pointer'>Login</div>
	)
}

export default page