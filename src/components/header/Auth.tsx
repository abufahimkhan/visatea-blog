'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { ClerkLoaded } from '@clerk/nextjs';
const Auth = () => {
    return (
        <ClerkLoaded>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <button className="hidden md:inline-block rounded-full bg-sky-500 py-3 px-7 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </ClerkLoaded>
    )
}

export default Auth
