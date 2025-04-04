import { Hero } from '@/components/organisms/Hero';
import { Pricing } from '@/components/organisms/Pricing';
import { Reviews } from '@/components/organisms/Reviews';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
	return (
		<div className="relative">
			<main>
				<Hero />
				<Pricing />
				<Reviews />
			</main>
			<Footer />
		</div>
	);
}
