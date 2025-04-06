'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { siteConfig } from '@/lib/constants/site';

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();

	const headerBackground = useTransform(
		scrollY,
		[0, 50],
		['hsla(var(--background), 0)', 'hsla(var(--background), 0.9)']
	);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm dark:text-white"
			style={{
				backgroundColor: headerBackground,
				boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none',
			}}>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<Link href="/#home" className="relative h-full w-32 transition-opacity hover:opacity-90">
						<Image
							src="/logos/logo_black_no_bg.png"
							alt={siteConfig.name}
							fill
							className="object-cover dark:hidden w-full h-full"
							style={{ aspectRatio: '1/2' }}
							priority
						/>
						<Image
							src="/logos/logo_white_no_bg.png"
							alt={siteConfig.name}
							fill
							className="object-cover hidden dark:block w-full h-full"
							priority
						/>
					</Link>

					<nav className="hidden md:flex items-center space-x-8">
						{siteConfig.nav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm font-medium transition-colors hover:text-primary">
								{item.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center space-x-4">
						<Link href="/login">
							<Button variant="ghost" size="sm">
								Log in
							</Button>
						</Link>
						<Link href="/sign-up">
							<Button size="sm">Get Started</Button>
						</Link>
					</div>
				</div>
			</div>
		</motion.header>
	);
}
