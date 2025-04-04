'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
	{
		id: 1,
		name: 'Sarah Johnson',
		role: 'Sales Director',
		company: 'TechCorp Inc.',
		image: '/avatars/avatar-1.svg',
		content: "XCOMS AI has revolutionized our sales outreach. We've seen a 300% increase in successful connections.",
		stars: 5,
	},
	{
		id: 2,
		name: 'Michael Chen',
		role: 'Recruiting Manager',
		company: 'Talent Solutions',
		image: '/avatars/avatar-2.svg',
		content: 'The AI calling system has made our recruitment process so much more efficient. Outstanding results!',
		stars: 5,
	},
	{
		id: 3,
		name: 'Emily Rodriguez',
		role: 'VP of Sales',
		company: 'Growth Dynamics',
		image: '/avatars/avatar-3.svg',
		content: 'A game-changer for our sales team. The AI voice quality is incredibly natural and engaging.',
		stars: 4,
	},
];

export function Reviews() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % reviews.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="reviews" className="py-20 bg-white dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>

				<div className="relative max-w-4xl mx-auto">
					<div className="overflow-hidden">
						<motion.div className="flex" animate={{ x: `-${activeIndex * 100}%` }} transition={{ duration: 0.5 }}>
							{reviews.map((review) => (
								<div key={review.id} className="min-w-full px-4">
									<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
										<div className="w-20 h-20 mx-auto mb-4 relative">
											<Image 
										src={review.image} 
										alt={review.name} 
										fill 
										className="rounded-full p-2 bg-gray-100 dark:bg-gray-600" 
										style={{ objectFit: 'contain' }}
									/>
										</div>
										<div className="flex justify-center mb-4">
											{[...Array(5)].map((_, i) => (
												<svg
													key={i}
													className={`w-5 h-5 ${i < review.stars ? 'text-yellow-400' : 'text-gray-300'}`}
													fill="currentColor"
													viewBox="0 0 20 20">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											))}
										</div>
										<p className="text-lg mb-4">{review.content}</p>
										<h3 className="font-bold text-lg">{review.name}</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">
											{review.role} at {review.company}
										</p>
									</div>
								</div>
							))}
						</motion.div>
					</div>

					<div className="flex justify-center mt-8 space-x-2">
						{reviews.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-3 h-3 rounded-full ${
									index === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
