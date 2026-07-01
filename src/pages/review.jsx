import { FaStar } from "react-icons/fa";

const breakdown = [
  { stars: 5, pct: 68 },
  { stars: 4, pct: 21 },
  { stars: 3, pct: 7 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    name: "Aditya Sharma",
    product: "Rockerz 551 ANC Pro",
    rating: 5,
    date: "2 weeks ago",
    text: "The ANC actually blocks out my open office. Battery lasts me the whole work week on one charge. Best pair I've owned.",
  },
  {
    name: "Priya Nair",
    product: "Rockerz 235 Pro",
    rating: 5,
    date: "1 month ago",
    text: "Bought this for the gym and it hasn't let me down once, even through sweaty sessions. Fit is snug and secure.",
  },
  {
    name: "Rahul Verma",
    product: "Rockerz 450 Pro",
    rating: 4,
    date: "1 month ago",
    text: "Sound quality is great for the price. Only wish the case felt a bit more premium, but no complaints on the audio.",
  },
  {
    name: "Sneha Kulkarni",
    product: "Rockerz 550",
    rating: 5,
    date: "2 months ago",
    text: "Ordered on a Tuesday, arrived Thursday, paired instantly. The bass has real punch without drowning out vocals.",
  },
  {
    name: "Karan Mehta",
    product: "Rockerz 333 Pro",
    rating: 4,
    date: "3 months ago",
    text: "Comfortable for long calls and the mic quality surprised me. Docking a star only because the charging cable is short.",
  },
  {
    name: "Ananya Iyer",
    product: "Rockerz 430",
    rating: 5,
    date: "3 months ago",
    text: "My third pair from this brand and still the best value out there. Customer support replaced a faulty unit in two days.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

const Stars = ({ count }) => (
  <div className="flex gap-0.5 text-amber-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className={i < count ? "opacity-100" : "opacity-20"} />
    ))}
  </div>
);

const Review = () => {
  const average = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-8">
      <h1 className="text-center font-display text-2xl font-bold text-white md:text-3xl">
        What Customers Are Saying
      </h1>
      <div className="mx-auto mt-4 h-px w-full max-w-xs bg-white/10" />

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
        <div className="rounded-2xl border border-white/5 bg-surface-800 p-6 md:sticky md:top-24 md:self-start">
          <p className="font-display text-5xl font-bold text-white">
            {average}
          </p>
          <Stars count={Math.round(average)} />
          <p className="mt-2 text-sm text-white/50">
            Based on {reviews.length} reviews
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {breakdown.map((b) => (
              <div
                key={b.stars}
                className="flex items-center gap-2 text-xs text-white/50"
              >
                <span className="w-3">{b.stars}</span>
                <FaStar className="text-amber-400" size={10} />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <span className="w-8 text-right">{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/5 bg-surface-800 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-display text-sm font-semibold text-cyan-300">
                    {initials(r.name)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{r.name}</p>
                    <p className="text-xs text-white/40">{r.product}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-white/40">{r.date}</span>
              </div>
              <div className="mt-4">
                <Stars count={r.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
