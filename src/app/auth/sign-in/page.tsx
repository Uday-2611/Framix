'use client'

import Google from '@/components/buttons/oauth/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {

    const { signInForm, handleSignIn, isLoading } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = signInForm

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <div className="flex justify-center mb-4">
                            {/* Optional: Add Logo here if needed, or keep it minimal as per reference */}
                            <span className="text-2xl font-bold">Framix</span>
                        </div>
                        <h1 className="text-3xl font-bold">Welcome to Framix</h1>
                        <p className="text-balance text-muted-foreground">
                            Your AI agent for work
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Sign in or sign up for free <br /> with your work email
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Google />

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or
                                </span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(handleSignIn)} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@work-email.com"
                                    {...register('email')}
                                    className={errors.email ? 'border-destructive' : ''}
                                />
                                {errors.email && (
                                    <p className='text-xs text-destructive'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password" className="sr-only">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    {...register('password')}
                                    className={errors.password ? 'border-destructive' : ''}
                                />
                                {errors.password && (
                                    <p className='text-xs text-destructive'>
                                        {errors.password.message}
                                    </p>
                                )}
                                <div className="flex items-center justify-end">
                                    <Link
                                        href="#"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            {errors.root && (
                                <p className='text-xs text-destructive text-center'>
                                    {errors.root.message}
                                </p>
                            )}

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Signing In...
                                    </>
                                ) : (
                                    'Enter your work email'
                                )}
                            </Button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/sign-up" className="underline">
                            Create an account
                        </Link>
                    </div>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative overflow-hidden">
                {/* Placeholder for the right side image - using a dark gradient/abstract background for now to match the 'dark' aesthetic */}
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <div className="text-zinc-700 font-bold text-4xl">Product Screenshot</div>
                    {/* If we had the image asset, we would use <Image src="..." ... /> here */}
                </div>
            </div>
        </div>
    )
}
