import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/organisms/Header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'XCOMS AI - Automated AI Sales & Recruiting Calls',
	description:
		"Transform your sales and recruiting with AI-powered automated calls. Boost efficiency and reach with XCOMS AI's intelligent robo-calling solution.",
	keywords: ['AI', 'Sales', 'Recruiting', 'Automated Calls', 'Robo Caller', 'AI Sales', 'AI Recruiting'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
