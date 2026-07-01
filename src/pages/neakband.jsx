import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/productcard";

const Neakband = () => {
  const [mydata, setdata] = useState([]);

  const loadData = async () => {
    const api = `http://localhost:3000/product/?categry=Neckband`;
    const resp = await axios.get(api);
    setdata(resp.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <h1 className="text-center font-display text-2xl font-bold text-cyan-300 md:text-3xl">Our Neckband Products</h1>
      <div className="mx-auto mb-10 mt-4 h-px w-full max-w-xs bg-white/10" />
      <div className="flex flex-wrap justify-center gap-6">
        {mydata.map((key) => (
          <ProductCard key={key.id} product={key} />
        ))}
      </div>
    </section>
  );
};
export default Neakband;
