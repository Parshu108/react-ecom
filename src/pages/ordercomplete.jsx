import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Waveform from "../component/waveform";

const OrderComplete = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {isLoading ? (
        <>
          <Waveform className="h-16 text-cyan-400" />
          <p className="mt-6 text-sm text-white/40">Placing your order…</p>
        </>
      ) : (
        <>
          <FaCheckCircle className="text-6xl text-emerald-400" />
          <h1 className="mt-6 font-display text-2xl font-bold text-white md:text-3xl">
            Your Order Was Placed Successfully
          </h1>
          <Link
            to="/home"
            className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-cyan-300"
          >
            Continue Shopping
          </Link>
        </>
      )}
    </section>
  );
};

export default OrderComplete;
