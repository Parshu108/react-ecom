import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntIncrese, qntydecrease, dataRemove } from "../cartSlice";

const Cartdata = () => {
  const prodata = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const netAmount = prodata.reduce((sum, k) => sum + k.prize * k.qnty, 0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <h1 className="font-display text-2xl font-bold text-white md:text-3xl">My Cart</h1>
      <p className="mt-2 flex items-center gap-1 text-xl font-semibold text-emerald-400">
        <FaRupeeSign />
        {netAmount}
      </p>

      {prodata.length === 0 ? (
        <p className="mt-10 text-white/50">Your cart is empty.</p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px] text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/50">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {prodata.map((key, i) => (
                <tr key={key.id} className="border-t border-white/5 hover:bg-white/[0.03]">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">
                    <img src={key.img} alt={key.name} className="h-14 w-14 rounded-lg bg-white/5 object-contain p-1" />
                  </td>
                  <td className="px-4 py-3 font-medium text-white">{key.name}</td>
                  <td className="px-4 py-3">{key.categry}</td>
                  <td className="px-4 py-3">₹{key.prize}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <button onClick={() => dispatch(qntydecrease({ id: key.id }))} aria-label="Decrease quantity">
                        <FaCircleMinus />
                      </button>
                      <span className="text-white">{key.qnty}</span>
                      <button onClick={() => dispatch(qntIncrese({ id: key.id }))} aria-label="Increase quantity">
                        <FaPlusCircle />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-white">₹{key.prize * key.qnty}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => dispatch(dataRemove({ id: key.id }))}
                      className="text-white/40 transition-colors hover:text-rose-400"
                      aria-label="Remove item"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => navigate("/checkout")}
          disabled={prodata.length === 0}
          className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};
export default Cartdata;
