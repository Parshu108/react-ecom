import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topheader = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.mycart.cart);

  return (
    <div className="sticky top-0 z-40 flex h-12 items-center justify-end gap-5 bg-white/5 px-6 text-lg text-white/80 backdrop-blur">
      <button onClick={() => navigate("/cartdata")} className="transition-colors hover:text-cyan-300" aria-label="Cart">
        <FaShoppingCart />
      </button>
      <span className="text-sm">{cart.length}</span>
      <button onClick={() => navigate("/customber")} className="transition-colors hover:text-cyan-300" aria-label="Account">
        <RiAdminFill />
      </button>
    </div>
  );
};
export default Topheader;
