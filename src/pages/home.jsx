import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../component/productcard";

const slides = [
  { title: "Rockerz 551 ANC Pro", subtitle: "Active noise cancelling, redefined.", from: "from-cyan-500/20" },
  { title: "Sound that moves with you", subtitle: "Up to 60 hours of nonstop playback.", from: "from-emerald-500/20" },
  { title: "Built for the bass heads", subtitle: "Immersive audio, everyday comfort.", from: "from-rose-500/20" },
];

const Home = () => {
  const [mydata, setdata] = useState([]);
  const [slide, setSlide] = useState(0);

  const loadData = async () => {
    const api = `http://localhost:3000/product`;
    const resp = await axios.get(api);
    setdata(resp.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative flex h-[420px] items-center overflow-hidden bg-surface-900 md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 bg-gradient-to-br ${slides[slide].from} to-transparent`}
          />
        </AnimatePresence>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-cyan-300">boAt Rockerz</p>
              <h1 className="max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                {slides[slide].title}
              </h1>
              <p className="mt-4 max-w-md text-white/60">{slides[slide].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-cyan-400" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <h1 className="mb-10 text-center font-display text-2xl font-bold text-white md:text-3xl">
          Our Premium Products
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {mydata.map((key) => (
            <ProductCard key={key.id} product={key} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
