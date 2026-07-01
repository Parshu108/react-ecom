const BAR_HEIGHTS = [40, 70, 100, 65, 45, 80, 55];

const Waveform = ({ className = "", animate = true }) => {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-current ${animate ? "animate-wave" : ""}`}
          style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default Waveform;
