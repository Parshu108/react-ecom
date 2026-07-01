import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../component/productcard";

const Productsearch = () => {
  const [mydata, setdata] = useState([]);
  const [txtval, setTxtVal] = useState("");

  const handleProduct = async (e) => {
    const value = e.target.value;
    setTxtVal(value);
    const api = `http://localhost:3000/product/`;
    const resp = await axios.get(api);
    setdata(resp.data);
  };

  const results = mydata.filter((key) => key.name.toLowerCase().includes(txtval.toLowerCase()));

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-white md:text-3xl">Search Your Products</h1>
        <div className="relative mt-6">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={txtval}
            onChange={handleProduct}
            placeholder="Enter product name"
            className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder-white/40 outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="mx-auto my-10 h-px w-full max-w-xs bg-white/10" />

      <div className="flex flex-wrap justify-center gap-6">
        {txtval && results.map((key) => <ProductCard key={key.id} product={key} />)}
        {txtval && results.length === 0 && <p className="text-white/40">No products found for “{txtval}”.</p>}
      </div>
    </section>
  );
};
export default Productsearch;
