'use client';

import { SignUpForm } from '@/components/molecules/SignUpForm';

export function SignUpPage() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<main className="container mx-auto px-4 py-24">
				<SignUpForm />
			</main>
		</div>
	);
}
