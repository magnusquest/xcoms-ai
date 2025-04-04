'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';

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
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`rounded-lg p-8 ${
								plan.highlighted
									? 'bg-white dark:bg-gray-800 shadow-xl ring-2 ring-primary'
									: 'bg-white dark:bg-gray-800 shadow-lg'
							}`}>
							<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
							<p className="text-4xl font-bold mb-6">{plan.price}</p>
							<p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
							<ul className="space-y-4 mb-8">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center">
										<svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
										{feature}
									</li>
								))}
							</ul>
							<Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
								Get Started
							</Button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
