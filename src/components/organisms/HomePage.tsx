'use client';

import { Hero } from '@/components/molecules/Hero';
import { Features } from '@/components/molecules/Features';
import { Pricing } from '@/components/molecules/Pricing';
import { Reviews } from '@/components/molecules/Reviews';

export function HomePage() {
	return (
		<div className="relative">
			<main>
				<Hero />
				<Features />
				<Pricing />
				<Reviews />
			</main>
		</div>
	);
}
