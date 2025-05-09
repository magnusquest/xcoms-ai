'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

interface LoginFormData {
    email: string;
    password: string;
}

export function LoginForm() {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSSOClick = (provider: string) => {
        console.log(`Signing in with ${provider}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Log in to your XCOMS AI account to manage your communications and track your results.
                    </p>
                </div>
                <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div className="flex items-center justify-end mt-2">
                                <Link href="#" className="text-sm text-primary hover:text-primary-dark">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            Log In
                        </Button>
                    </form>
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button
                            onClick={() => handleSSOClick('Google')}
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <FcGoogle className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => handleSSOClick('Facebook')}
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <FaFacebook className="h-5 w-5 text-blue-600" />
                        </button>
                        <button
                            onClick={() => handleSSOClick('Apple')}
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <FaApple className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-gray-600 dark:text-gray-300">Don&apos;t have an account? </span>
                        <Link href="/sign-up" className="text-primary hover:text-primary-dark font-medium">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
