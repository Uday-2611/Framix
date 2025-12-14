'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'
import Google from '@/components/buttons/oauth/google'

import { useAuth } from '@/hooks/use-auth'

export default function SignUpPage() {
    const { signUpForm, handleSignUp, isLoading } = useAuth()
    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <div className="flex justify-center mb-4">
                            {/* Optional: Add Logo here if needed */}
                            <span className="text-4xl font-bold">Framix</span>
                        </div>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
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

                        <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Max"
                                        {...signUpForm.register('firstName')}
                                        className={signUpForm.formState.errors.firstName ? 'border-destructive' : ''}
                                    />
                                    {signUpForm.formState.errors.firstName && (
                                        <p className='text-xs text-destructive'>
                                            {signUpForm.formState.errors.firstName.message}
                                        </p>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Robinson"
                                        {...signUpForm.register('lastName')}
                                        className={signUpForm.formState.errors.lastName ? 'border-destructive' : ''}
                                    />
                                    {signUpForm.formState.errors.lastName && (
                                        <p className='text-xs text-destructive'>
                                            {signUpForm.formState.errors.lastName.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter a valid email"
                                    {...signUpForm.register('email')}
                                    className={signUpForm.formState.errors.email ? 'border-destructive' : ''}
                                />
                                {signUpForm.formState.errors.email && (
                                    <p className='text-xs text-destructive'>
                                        {signUpForm.formState.errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter a strong password"
                                    {...signUpForm.register('password')}
                                    className={signUpForm.formState.errors.password ? 'border-destructive' : ''}
                                />
                                {signUpForm.formState.errors.password && (
                                    <p className='text-xs text-destructive'>
                                        {signUpForm.formState.errors.password.message}
                                    </p>
                                )}
                            </div>

                            {signUpForm.formState.errors.root && (
                                <p className='text-xs text-destructive text-center'>
                                    {signUpForm.formState.errors.root.message}
                                </p>
                            )}

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Creating account...' : 'Create an account'}
                            </Button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/auth/sign-in" className="hover:text-primary">
                            Sign in
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