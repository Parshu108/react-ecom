import { FaHeadphonesAlt, FaBolt, FaLeaf, FaAward } from "react-icons/fa";
import Waveform from "../component/waveform";

const stats = [
  { label: "Years in sound", value: "12+" },
  { label: "Headphones shipped", value: "2.4M+" },
  { label: "Countries served", value: "38" },
  { label: "Average rating", value: "4.6★" },
];

const values = [
  {
    icon: FaHeadphonesAlt,
    title: "Sound first",
    text: "Every driver, seal, and firmware tune is judged by one thing: how it makes the music feel.",
  },
  {
    icon: FaBolt,
    title: "Built to last a shift",
    text: "60-hour batteries and reinforced hinges so your headphones outlast the workday, not the other way round.",
  },
  {
    icon: FaLeaf,
    title: "Lighter footprint",
    text: "Recyclable packaging and take-back battery recycling on every order, no extra cost to you.",
  },
  {
    icon: FaAward,
    title: "Backed by warranty",
    text: "12-month warranty and a real support team, not a chatbot loop, if something ever goes wrong.",
  },
];

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-900 px-6 py-20 text-center md:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <Waveform className="mx-auto h-8 text-cyan-400" />
          <h1 className="mt-6 font-display text-4xl font-bold text-white md:text-5xl">
            Sound is how we tell our story
          </h1>
          <p className="mt-5 text-white/60">
            HeadPhones started with a simple frustration: great audio gear that
            couldn't survive a commute, a workout, or a rainy day. So we set out
            to build headphones people could stop thinking about and just listen
            through.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/5 bg-surface-800 px-4 py-8 text-center"
            >
              <p className="font-display text-3xl font-bold text-cyan-300">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <h2 className="mb-10 text-center font-display text-2xl font-bold text-white md:text-3xl">
          What we build around
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-surface-800 p-6 transition-colors hover:border-cyan-400/30"
            >
              <Icon className="text-2xl text-cyan-300" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
