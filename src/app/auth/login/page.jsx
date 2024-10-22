"use client";
import { loginAction } from '@/app/_actions/auth'
import React from 'react'

export const LoginPage = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Authentification avec Github</h1>
        <button 
            onClick={loginAction} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
            Login
        </button>
    </div>
)
}
export default LoginPage