'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
	{ href: '/', label: 'Home' },
	{ href: '/menu', label: 'Menu' },
	{ href: '/about-us', label: 'About Us' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/contact', label: 'Contact' },
	{ href: '/jobs', label: 'Jobs' },
];

export function NavMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<nav className='hidden md:flex items-center gap-8 justify-center flex-1'>
				{menuItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={` hover:text-red-600 transition-colors ${
							pathname === item.href
								? 'text-red-600 font-bold'
								: ''
						}`}
					>
						{item.label}
					</Link>
				))}
			</nav>

			<div className='md:hidden'>
				<button
					onClick={() => setIsOpen(true)}
					className='p-2 text-gray-700'
					aria-label='Open menu'
				>
					<Menu className='w-6 h-6' />
				</button>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '100%' }}
							transition={{ type: 'spring', damping: 20 }}
							className='fixed inset-0 bg-white z-50'
						>
							<div className='flex justify-end p-4'>
								<button
									onClick={() => setIsOpen(false)}
									className='p-2 text-gray-700'
									aria-label='Close menu'
								>
									<X className='w-6 h-6' />
								</button>
							</div>
							<nav className='flex flex-col items-center gap-8 p-8'>
								{menuItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`text-xl text-gray-700 hover:text-red-600 transition-colors ${
											pathname === item.href
												? 'text-red-600 font-bold'
												: ''
										}`}
									>
										{item.label}
									</Link>
								))}
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}
