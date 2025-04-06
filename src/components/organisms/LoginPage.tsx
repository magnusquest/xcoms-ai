'use client';

import { LoginForm } from '@/components/molecules/LoginForm';

export function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="container mx-auto px-4 py-24">
                <LoginForm />
            </main>
        </div>
    );
}
