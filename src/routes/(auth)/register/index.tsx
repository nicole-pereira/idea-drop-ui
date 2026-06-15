import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(auth)/register/')({
  component: RegisterPage,
})

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='max-w-md mx-auto'>
      <h1 className="text-3xl font-bold mb-6 text-orange-400">Register</h1>
      <form className="space-y-4">
        <input
          type="text"
          className="w-full border border-gray rounded-md p-2"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="email"
          className="w-full border border-gray rounded-md p-2"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          className="w-full border border-gray rounded-md p-2"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <button className="bg-orange-400 hover:bg-orange-700 text-white cursor-pointer
          font-semibold px-4 py-2 rounded-md w-full disabled:opacity">
            Register
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{' '}
        <Link to='/login' className='text-orange-600 hover:underline font-medium'>Login</Link>
      </p>
    </div>
  );
}
