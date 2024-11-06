import React, { useState } from 'react';
import { auth } from '../firebase'; // Import auth from firebase.ts
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword from Firebase

const Login = () => {
  // State for managing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      // Sign in the user using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in');
      // Optionally, redirect the user or show a success message
    } catch (err: any) {
      setError('Error logging in: ' + err.message); // Handle errors
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Submit button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
