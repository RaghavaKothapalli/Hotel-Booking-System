'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  // State management
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Function to handle sign-up logic
  const handleSignUp = async () => {
    try {
      setError(''); // Clear any previous errors
      
      // Basic validation
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      // Create new user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('Created user:', user);
      
      // Store session data
      sessionStorage.setItem('user', 'true');

      // Reset form
      setEmail('');
      setPassword('');
      
      // Redirect to home page or dashboard
      router.push('/');
      
    } catch (error: any) {
      // Handle specific Firebase auth errors
      const errorCode = error.code;
      console.error('Sign-up error:', errorCode, error.message);
      
      // Set user-friendly error messages
      setError(
        errorCode === 'auth/email-already-in-use' ? 'An account already exists with this email' :
        errorCode === 'auth/invalid-email' ? 'Invalid email address' :
        errorCode === 'auth/weak-password' ? 'Password is too weak' :
        'An error occurred during sign up'
      );
    }
  };

  // Handle form submission with enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        
        {/* Error message display */}
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
          onKeyPress={handleKeyPress}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          autoComplete="email"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          autoComplete="new-password"
        />
        
        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Sign Up
        </button>

        {/* Optional: Add a link to sign in page */}
        <p className="mt-4 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <button
            onClick={() => router.push('/signin')}
            className="text-indigo-400 hover:text-indigo-300 focus:outline-none focus:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;