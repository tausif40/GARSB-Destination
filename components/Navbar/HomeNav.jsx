'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import SignIn from './SignIn'

function HomeNav() {
	const menuRef = useRef(null);
	const pathname = usePathname();
	const [ showNav, setShowNav ] = useState(true);
	const [ lastScrollY, setLastScrollY ] = useState(0);
	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ isMobileMenuOpen ]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [ lastScrollY ]);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/contact', label: 'Contact Us' },
		{ href: '/abut', label: 'About' },
		{ href: '/help', label: 'Help' },
	];

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 bg-white shadow transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'
				}`}
		>
			<div className="container px-4 py-2 flex justify-between items-center h-20">
				<div className="relative w-56 sm:w-60">
					<Link href='/'>
						<Image
							src="/logo/logo.png"
							alt="GARSB Logo"
							width={250}
							height={100}
							className="object-contain"
						/>
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-10">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm transition-colors ${pathname === item.href
								? 'text-red-600 font-semibold'
								: 'text-gray-700 hover:text-red-600'
								}`}
						>
							{item.label}
						</Link>
					))}
					<SignIn />
				</nav>

				{/* Hamburger Icon */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Slide-in Menu */}
			<div
				ref={menuRef}
				className={`fixed top-20 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-40 rounded-lg ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
			>
				<div className="p-3 flex flex-col gap-4 bg-white/80 backdrop-blur-sm">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsMobileMenuOpen(false)}
							className={`text-lg py-2 ${pathname === item.href
								? 'text-red-600 font-semibold'
								: 'text-gray-800 hover:text-red-600'
								}`}
						>
							{item.label}
						</Link>
					))}
					<SignIn />
				</div>
			</div>
		</div >
	);
}

export default HomeNav;
