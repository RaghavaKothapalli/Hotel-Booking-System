'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  // State to store user email and password input
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); // Added error state for handling errors
  
  // Router hook to navigate within the application
  const router = useRouter();

  // Function to handle sign-in logic
  const handleSignIn = async () => {
    try {
      setError(''); // Clear any previous errors
      
      // Attempt to sign in with Firebase using email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log('Signed in user:', user);
      
      // Store session data if sign-in is successful
      sessionStorage.setItem('user', 'true');

      // Reset email and password fields after successful sign-in
      setEmail('');
      setPassword('');
      
      // Redirect the user to the home page after successful sign-in
      router.push('/');
      
    } catch (error: any) {
      // Handle specific Firebase auth errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign-in error:', errorCode, errorMessage);
      
      // Set user-friendly error message
      setError(
        errorCode === 'auth/wrong-password' ? 'Incorrect password' :
        errorCode === 'auth/user-not-found' ? 'No account found with this email' :
        errorCode === 'auth/invalid-email' ? 'Invalid email address' :
        'An error occurred during sign in'
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        
        {/* Show error message if exists */}
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
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;