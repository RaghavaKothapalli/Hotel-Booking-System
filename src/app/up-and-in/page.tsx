'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true); // State to toggle between sign-up and sign-in
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Handle Sign-Up
  const handleSignUp = async () => {
    try {
      setError('');
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Created user:', userCredential.user);
      sessionStorage.setItem('user', 'true');
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error: any) {
      const errorCode = error.code;
      setError(
        errorCode === 'auth/email-already-in-use' ? 'An account already exists with this email' :
        errorCode === 'auth/invalid-email' ? 'Invalid email address' :
        errorCode === 'auth/weak-password' ? 'Password is too weak' :
        'An error occurred during sign up'
      );
    }
  };

  // Handle Sign-In
  const handleSignIn = async () => {
    try {
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in user:', userCredential.user);
      sessionStorage.setItem('user', 'true');
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error: any) {
      const errorCode = error.code;
      setError(
        errorCode === 'auth/wrong-password' ? 'Incorrect password' :
        errorCode === 'auth/user-not-found' ? 'No account found with this email' :
        errorCode === 'auth/invalid-email' ? 'Invalid email address' :
        'An error occurred during sign in'
      );
    }
  };

  // Toggle between Sign-Up and Sign-In
  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={isSignUp ? handleSignUp : handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 transition-colors"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <p className="mt-4 text-center text-gray-400 text-sm">
          {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
          <button
            onClick={toggleForm}
            className="text-indigo-400 hover:text-indigo-300 focus:outline-none focus:underline"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
