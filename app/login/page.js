'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [role, setRole] = useState('user');
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (loginMethod === 'email') {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else {
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', {
        role,
        loginMethod,
        credentials: loginMethod === 'email' ? formData.email : formData.phone,
        rememberMe: formData.rememberMe,
      });
      setIsLoading(false);
      // In real app, redirect to dashboard
      alert(`Login successful as ${role}!`);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider} as ${role}`);
    // In real app, implement OAuth flow
    alert(`Redirecting to ${provider} login...`);
  };

  return (
    <main className="bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 min-h-screen">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Welcome Back</p>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Sign in to your account and continue your wedding journey.
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Access your personalized dashboard, manage bookings, connect with vendors, and track your wedding planning
              progress—all in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 rounded-3xl border border-rose-100 bg-white/80 p-4 shadow-sm shadow-rose-100/50 dark:border-rose-500/30 dark:bg-slate-950/80">
            <RoleCard
              label="I am planning a wedding"
              description="Access your planning dashboard, checklists, and vendor bookings."
              active={role === 'user'}
              onClick={() => setRole('user')}
            />
            <RoleCard
              label="I am a vendor or service provider"
              description="Manage your profile, leads, bookings, and business analytics."
              active={role === 'vendor'}
              onClick={() => setRole('vendor')}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Stat label="Active users" value="65,000+" />
            <Stat label="Verified vendors" value="9,800+" />
            <Stat label="Successful weddings" value="42,000+" />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-rose-100/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-none">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {role === 'user' ? 'Sign in to your account' : 'Vendor login'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {role === 'user'
                  ? 'Welcome back! Sign in to continue planning your special day.'
                  : 'Access your vendor dashboard and manage your business.'}
              </p>
            </div>

            {/* Login Method Toggle */}
            <div className="flex gap-2 rounded-2xl border border-slate-200/70 bg-slate-50/50 p-1 dark:border-slate-700 dark:bg-slate-900/30">
              <button
                type="button"
                onClick={() => {
                  setLoginMethod('email');
                  setErrors({});
                }}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  loginMethod === 'email'
                    ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-800 dark:text-rose-400'
                    : 'text-slate-600 hover:text-rose-600 dark:text-slate-300'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => {
                  setLoginMethod('phone');
                  setErrors({});
                }}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  loginMethod === 'phone'
                    ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-800 dark:text-rose-400'
                    : 'text-slate-600 hover:text-rose-600 dark:text-slate-300'
                }`}
              >
                Phone
              </button>
            </div>

            {/* Email/Phone Input */}
            {loginMethod === 'email' ? (
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email Address *</label>
                <input
                  type="email"
                  placeholder="aditi@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full rounded-2xl border px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-900/40'
                      : 'border-slate-200/80 bg-white/90 focus:border-rose-400 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>
            ) : (
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Phone Number *</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">+91</div>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full rounded-2xl border px-4 py-3 pl-14 text-sm text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-900/40'
                        : 'border-slate-200/80 bg-white/90 focus:border-rose-400 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 dark:text-red-400">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Password Input */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password *</label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full rounded-2xl border px-4 py-3 pr-12 text-sm text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 ${
                    errors.password
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-900/40'
                      : 'border-slate-200/80 bg-white/90 focus:border-rose-400 focus:ring-rose-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:focus:border-rose-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-400"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 dark:text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-rose-500 focus:ring-rose-400"
              />
              <label htmlFor="rememberMe" className="text-sm text-slate-600 dark:text-slate-300">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200/60 transition hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed dark:shadow-rose-900/40"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500 dark:bg-slate-950 dark:text-slate-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:bg-rose-50/50 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-rose-500/40 dark:hover:bg-slate-800"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('facebook')}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:bg-rose-50/50 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-rose-500/40 dark:hover:bg-slate-800"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              Don't have an account?{' '}
              <Link href="/signup" className="font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400">
                Create account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function RoleCard({ label, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 min-w-[260px] flex-col items-start gap-2 rounded-2xl border p-4 text-left transition ${
        active
          ? 'border-rose-400 bg-rose-50/80 text-rose-600 shadow-sm shadow-rose-200/60 dark:border-rose-400/60 dark:bg-rose-950/30 dark:text-rose-100'
          : 'border-slate-200 text-slate-600 hover:border-rose-200 hover:text-rose-600 dark:border-slate-700 dark:text-slate-300'
      }`}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs text-slate-500 dark:text-slate-400">{description}</span>
    </button>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <p className="text-xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  );
}

