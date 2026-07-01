import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Waveform from "./waveform";

const shopLinks = ["Wireless", "Noise Cancelling", "Gaming", "Accessories"];
const supportLinks = ["Contact Us", "FAQs", "Shipping & Returns", "Warranty"];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface-900 pt-14 text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-10 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <Waveform className="h-4 text-cyan-400" />
            <span className="font-display text-lg font-bold">HpPhone</span>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            Premium headphones designed for immersive sound, comfort, and style.
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebook className="cursor-pointer text-white/50 transition-all hover:-translate-y-1 hover:text-cyan-300" />
            <FaInstagramSquare className="cursor-pointer text-white/50 transition-all hover:-translate-y-1 hover:text-cyan-300" />
            <FaTwitter className="cursor-pointer text-white/50 transition-all hover:-translate-y-1 hover:text-cyan-300" />
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Shop</h5>
          <ul className="flex flex-col gap-2 text-sm">
            {shopLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/50 transition-colors hover:text-cyan-300">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Support</h5>
          <ul className="flex flex-col gap-2 text-sm">
            {supportLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/50 transition-colors hover:text-cyan-300">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h5>
          <p className="mb-3 text-sm text-white/50">Get exclusive deals & updates</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400"
            />
            <button className="shrink-0 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-cyan-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} SoundMax. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
