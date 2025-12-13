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
                        <div className="flex justify-center">
                            {/* Optional: Add Logo here if needed, or keep it minimal as per reference */}
                            <span className="text-4xl font-bold">Framix</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            Sign in or sign up for free with your work email
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
                                    placeholder="Enter your email"
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
                                        className="ml-auto inline-block text-sm text-muted-foreground"
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
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/sign-up" className="hover:text-primary">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative overflow-hidden">
                <Image
                    src="/auth.jpeg"
                    alt="Product Screenshot"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}
