'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiGitBranch, FiMessageCircle } from 'react-icons/fi';

const FeatureCard = ({ feature, index }: { feature: (typeof features)[0]; index: number }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.5, delay: index * 0.2 }}
			className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
			<div className="flex items-start space-x-4">
				<div className="p-3 bg-primary/10 rounded-lg">
					<feature.icon className="w-6 h-6 text-primary" />
				</div>
				<div className="flex-1">
					<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
					<p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
					<ul className="space-y-2">
						{feature.details.map((detail, detailIndex) => (
							<motion.li
								key={detailIndex}
								initial={{ opacity: 0, x: -20 }}
								animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
								transition={{ duration: 0.3, delay: index * 0.2 + detailIndex * 0.1 }}
								className="flex items-center space-x-2">
								<svg
									className="w-4 h-4 text-primary flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
								<span className="text-sm">{detail}</span>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

const features = [
	{
		id: 'lead-generation',
		title: 'Lead Generation',
		description:
			'Identify and gather your target audience with precision. Our AI-powered system analyzes market data to find the perfect prospects for your business.',
		icon: FiUsers,
		details: [
			'Smart audience targeting',
			'Data-driven prospect identification',
			'Automated list building',
			'Real-time lead scoring',
		],
	},
	{
		id: 'workflow',
		title: 'Customizable Workflow',
		description:
			'Automate your outreach process. When a new lead is identified, XCOMS AI instantly initiates personalized communication through your preferred channels.',
		icon: FiGitBranch,
		details: [
			'Automated trigger system',
			'Custom workflow builder',
			'Integration with CRM systems',
			'Real-time analytics dashboard',
		],
	},
	{
		id: 'conversation',
		title: 'Natural Real Conversation',
		description:
			'Engage leads through multiple channels with human-like interaction. Our AI adapts its communication style while maintaining a natural, conversational tone.',
		icon: FiMessageCircle,
		details: ['AI-powered voice calls', 'Smart email sequences', 'WhatsApp integration', 'SMS follow-ups'],
	},
];

export function Features() {
	return (
		<section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
				<div className="flex flex-col space-y-8 max-w-4xl mx-auto">
					{features.map((feature, index) => (
						<FeatureCard key={feature.id} feature={feature} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
