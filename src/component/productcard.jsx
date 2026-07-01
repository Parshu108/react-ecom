import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtocard } from "../cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(
      addtocard({
        id: product.id,
        name: product.name,
        categry: product.categry,
        prize: product.prize,
        img: product.img,
        qnty: 1,
      })
    );
  };

  return (
    <div
      onClick={() => navigate(`/productdisplay/${product.id}`)}
      className="group w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-surface-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.35)]"
    >
      <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent p-6">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
          {product.categry}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-display line-clamp-1 text-base font-semibold text-white/90">{product.name}</h3>
        <p className="text-lg font-bold text-emerald-400">₹{product.prize}</p>
        <button
          onClick={handleAdd}
          className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-medium text-white/90 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
