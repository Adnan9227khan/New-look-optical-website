import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

// Decide the API base URL:
// - Prefer REACT_APP_BACKEND_URL when provided (prod or local).
// - In dev, fall back to http://localhost:8000.
// - In prod with no env var, fall back to '' so Netlify proxy (/api/*) is used.
const rawEnv = process.env.REACT_APP_BACKEND_URL || '';
let API_BASE_URL = '';

if (rawEnv.trim()) {
  API_BASE_URL = rawEnv.replace(/\/$/, '');
} else if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:8000'; // change if your backend dev port is different
} else {
  API_BASE_URL = ''; // same-origin (works with Netlify proxy)
}

// Single axios instance
const api = axios.create({
  baseURL: API_BASE_URL, // can be 'https://api...', 'http://localhost:8000', or ''
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true, // ONLY if you use cookies for auth
});

export const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Warn if HTTPS site is calling an HTTP API (only matters when API_BASE_URL is explicit)
    if (window.location.protocol === 'https:' && API_BASE_URL.startsWith('http://')) {
      toast({
        title: 'Misconfiguration',
        description:
          'Your site is HTTPS but backend URL is HTTP. Use an HTTPS API URL in REACT_APP_BACKEND_URL or use the Netlify proxy.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await api.post('/api/admin/login', formData);

      if (data?.access_token) {
        localStorage.setItem('admin_token', data.access_token);
      }

      toast({ title: 'Login Successful!', description: 'Welcome to admin dashboard' });
      navigate('/admin/dashboard');
    } catch (error) {
      const msg =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Invalid username or password';
      toast({ title: 'Login Failed', description: msg, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">New Look Opticals</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={() => navigate('/')} className="text-sm text-blue-600 hover:text-blue-700">
              ← Back to Website
            </button>
          </div>

          {/* Debug helper: shows which API base is being used */}
          <p className="mt-4 text-center text-xs text-gray-400">
            API: {API_BASE_URL || '(proxy / same-origin)'}
          </p>
        </div>
      </div>
    </div>
  );
};
