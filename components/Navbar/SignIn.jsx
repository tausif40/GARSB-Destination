'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import React from 'react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

function SignIn() {
	const { data: session, status } = useSession();

	if (status === 'authenticated') {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="bg-red-200 border rounded-full px-5 py-2 ml-4 text-sm flex items-center gap-2">
						<p>{session?.user?.name}&nbsp;</p><ChevronDown size={14} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => signOut()}>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<button className="bg-red-600 text-white px-6 py-2 rounded-md text-sm ml-4" onClick={() => signIn('google')}>
			Sign In
		</button>
	);
}

export default SignIn;
