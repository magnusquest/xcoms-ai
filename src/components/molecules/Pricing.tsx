'use client';

import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { useRef } from 'react';

const pricingPlans = [
	{
		name: 'Free',
		price: '$0',
		description: 'Perfect for trying out our service',
		features: ['50 AI calls per month', 'Basic voice customization', 'Standard support', 'Analytics dashboard'],
	},
	{
		name: 'Pro',
		price: '$49',
		description: 'Best for growing businesses',
		features: [
			'500 AI calls per month',
			'Advanced voice customization',
			'Priority support',
			'Advanced analytics',
			'Custom scripts',
		],
		highlighted: true,
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		description: 'For large scale operations',
		features: [
			'Unlimited AI calls',
			'Full voice customization',
			'24/7 dedicated support',
			'Custom integration',
			'API access',
		],
	},
];

const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
			className={`relative rounded-lg p-8 overflow-hidden isolate flex flex-col min-h-[600px] ${
				plan.highlighted
					? 'bg-white dark:bg-gray-800 shadow-xl ring-2 ring-primary'
					: 'bg-white dark:bg-gray-800 shadow-lg'
			}`}>
			{/* Accent Effects */}
			{plan.highlighted && (
				<>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-500/5 to-blue-600/10"
						animate={{
							backgroundPosition: ['200% 0%', '-200% 0%'],
						}}
						transition={{
							duration: 15,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
					<motion.div
						className="absolute -inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
						animate={{
							scaleX: [1, 1.5, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				</>
			)}

			{/* Card Content */}
			<div className="relative flex flex-col flex-1">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}>
					<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
					<p className="text-4xl font-bold mb-6">{plan.price}</p>
					<p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
				</motion.div>

				<ul className="space-y-4 mb-auto">
					{plan.features.map((feature, featureIndex) => (
						<motion.li
							key={feature}
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 + 0.2 }}
							className="flex items-center">
							<svg
								className={`w-5 h-5 mr-2 ${
									plan.highlighted ? 'text-blue-500' : 'text-green-500'
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
							</svg>
							{feature}
						</motion.li>
					))}
				</ul>

				<motion.div
					className="mt-8"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}>
					<Button
						className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-blue-500 to-blue-600' : ''}`}
						variant={plan.highlighted ? 'default' : 'outline'}>
						Get Started
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export function Pricing() {
	return (
		<section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">Choose the plan that works best for you</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{pricingPlans.map((plan, index) => (
						<PricingCard key={plan.name} plan={plan} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
