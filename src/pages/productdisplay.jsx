import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { MdStarRate } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { addtocard } from "../cartSlice";

const Productdisplay = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  const loadData = async () => {
    const api = `http://localhost:3000/product/${id}`;
    const resp = await axios.get(api);
    setProduct(resp.data);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <h1 className="mb-6 text-center font-display text-2xl font-bold text-cyan-300 md:text-3xl">Our Product</h1>
      <div className="h-px w-full bg-white/10" />

      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="flex w-full max-w-md items-center justify-center rounded-2xl border border-white/10 bg-surface-800 p-8 md:w-1/2">
          <img src={product.img} alt={product.name} className="max-h-96 w-full object-contain" />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{product.name}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Bluetooth earphone with 10mm drivers, up to 60 hours nonstop playback, Type-C charging, ASAP™ Charge.
          </p>
          <p className="mt-4 text-sm font-medium text-emerald-400">Made for: {product.categry}</p>
          <p className="mt-2 flex items-center gap-2 text-2xl font-bold text-white">
            ₹{product.prize} <span className="text-sm font-semibold text-emerald-400">72% off</span>
          </p>
          <div className="mt-3 flex gap-1 text-amber-400">
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <IoStarHalf />
          </div>
          <button
            onClick={() =>
              dispatch(
                addtocard({
                  id: product.id,
                  name: product.name,
                  categry: product.categry,
                  prize: product.prize,
                  img: product.img,
                  qnty: 1,
                })
              )
            }
            className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-cyan-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default Productdisplay;
