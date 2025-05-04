"use client";

import React, { useEffect, useState } from "react";
import {
	motion,
	useMotionValue,
	useTransform,
	useAnimationFrame,
	MotionValue
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";

// WaveCube handles per-cube motion hooks outside of loops
function WaveCube({
	row,
	col,
	time
}: {
	row: number;
	col: number;
	time: MotionValue<number>;
}) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const x = (col - 14) * 28 - 200;
	const z = (row - 7) * 28 - 200;
	const source1 = { x: -196, z: 0 };
	const source2 = { x: 196, z: 0 };
	const d1 = Math.hypot(x - source1.x, z - source1.z);
	const d2 = Math.hypot(x - source2.x, z - source2.z);
	const wavelength = 64;
	const k = (2 * Math.PI) / wavelength;
	const period = 2.5;
	const omega = (2 * Math.PI) / period;
	const y = useTransform(
		time,
		(t) => 18 * (Math.sin(k * d1 - omega * t) + Math.sin(k * d2 - omega * t))
	);

	const opacity = 0.2;

	if (!mounted) return null; // Prevent SSR mismatch

	return (
		<motion.div
			className="absolute bg-gradient-to-r from-blue-600 to-purple-600 w-7 h-8 rounded-full shadow-lg"
			style={{
				left: `calc(50% + ${x}px)`,
				top: `calc(50% + ${z}px)`,
				transform: `translate(-50%, -50%)`,
				y,
				opacity
			}}
		/>
	);
}
function WaveCubeMatrix({
	rows = 22,
	cols = 27,
	time
}: {
	rows?: number;
	cols?: number;
	time: MotionValue<number>;
}) {
	// Tilt the matrix by rotating the parent
	return (
		<>
			{" "}
			<motion.div
				className="absolute inset-0 flex items-center justify-center"
				style={{ perspective: 1000 }}></motion.div>
			<motion.div
				className="relative w-full h-full"
				initial={{ rotateX: 30, rotateZ: -20 }}
				animate={{ rotateX: 30, rotateZ: -20 }}
				style={{ transformStyle: "preserve-3d" }}>
				{Array.from({ length: rows }).map((_, row) => (
					<React.Fragment key={`row-${row}`}>
						{Array.from({ length: cols }).map((_, col) => (
							<WaveCube
								key={`cube-${row}-${col}`}
								row={row * 3}
								col={col * 3}
								time={time}
							/>
						))}
					</React.Fragment>
				))}
			</motion.div>
		</>
	);
}

export function Hero() {
	// Global time value for wave animation
	const time = useMotionValue(0);
	useAnimationFrame((t) => time.set(t / 1000));

	return (
		<section
			id="home"
			className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 -translate-x-[30%] -translate-y-64">
				<WaveCubeMatrix time={time} />
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto h-full">
					<div className="text-center md:text-left">
						<motion.h1
							className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							AI Communications
						</motion.h1>
						<motion.p
							className="text-base sm:text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							Unlock powerful lead generation with AI-driven calls, texts, and
							emails. Transform your outreach into meaningful connections and
							drive results with confidence.
						</motion.p>
						<motion.div
							className="flex justify-center md:justify-start"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							<Link href="/sign-up">
								<Button size="lg">Get Started</Button>
							</Link>
						</motion.div>
					</div>
					<motion.div
						className="aspect-video rounded-lg overflow-hidden shadow-lg w-full mx-auto h-full"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}>
						<iframe
							className="w-full h-full"
							src="https://www.youtube.com/embed/v-EYzZCLF48"
							loading="lazy"
							title="Product video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
