import { useState } from 'react';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const Admin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('ppa_admin', 'true');
      window.location.href = '/';
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Admin access</h1>
        <p className="text-muted-foreground text-sm mb-8">Enter your password to access the chat inbox.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
          />
          {error && <p className="text-red-500 text-sm">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
