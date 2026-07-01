import { useState } from "react";

const Customber = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    console.log("Logging in with:", { email, password });
  };

  return (
    <section className="flex justify-center px-6 py-16 md:px-8">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-surface-800 p-8">
        <h1 className="mb-6 font-display text-2xl font-bold text-white">Login</h1>

        {error && (
          <div className="mb-5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-sm text-rose-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-medium text-white/70">Email address</label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white placeholder-white/30 outline-none focus:border-cyan-400"
            />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-white/70">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white placeholder-white/30 outline-none focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black transition-colors hover:bg-cyan-300"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Customber;
