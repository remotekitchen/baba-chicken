'use client';
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

const Header = ({ className }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`py-4 px-6 shadow-sm transition-colors sticky top-0 left-0 z-50 duration-300 ${
				isScrolled ? 'bg-red-500 !text-white' : 'bg-white'
			} ${className || ''}`}
		>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<Logo />
				<nav aria-label='Main navigation'>
					<NavMenu />
				</nav>
			</div>
		</header>
	);
};

export default Header;
