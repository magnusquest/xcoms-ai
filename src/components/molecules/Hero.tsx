"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
			{/* Animated background gradient */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 90, 0]
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}}
			/>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					<div className="text-center md:text-left max-w-xl">
						<motion.h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							AI Communications
						</motion.h1>
						<motion.p
							className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							Unlock powerful lead generation with AI-driven calls, texts, and
							emails. Transform your outreach into meaningful connections and
							drive results with confidence.
						</motion.p>
						<motion.div
							className="flex md:justify-start justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<Link href="/sign-up">
								<Button size="lg">Get Started</Button>
							</Link>
						</motion.div>
					</div>
					<motion.div
						className="aspect-video rounded-xl overflow-hidden shadow-2xl max-w-xl mx-auto md:mx-0"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/v-EYzZCLF48"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
