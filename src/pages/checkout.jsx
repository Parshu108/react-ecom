import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../cartSlice";

const fields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "address", label: "Shipping Address", type: "text" },
  { name: "contactno", label: "Contact No.", type: "text" },
  { name: "city", label: "City", type: "text" },
  { name: "email", label: "Email", type: "email" },
];

const Checkout = () => {
  const [input, setInput] = useState({});
  const product = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let proDetail = "";
  let totalPrice = 0;
  product.forEach((key) => {
    proDetail += `Product Name : ${key.name}, Qnty: ${key.qnty} <br> `;
    totalPrice += key.prize * key.qnty;
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:3000/order";
    const response = await axios.post(api, { products: proDetail, totalamount: totalPrice, ...input });
    dispatch(removeCart());
    console.log(response.data);
    navigate("/ordercomplete");
  };

  return (
    <section className="mx-auto max-w-xl px-6 py-14 md:px-8">
      <h1 className="mb-8 text-center font-display text-2xl font-bold text-white md:text-3xl">Checkout</h1>
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-surface-800 p-8">
        {fields.map((f) => (
          <div key={f.name} className="mb-5">
            <label className="mb-1.5 block text-sm font-medium text-white/70">{f.label}</label>
            <input
              type={f.type}
              name={f.name}
              onChange={handleInput}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-400"
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-cyan-400 py-3 font-semibold text-black transition-colors hover:bg-cyan-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Checkout;
