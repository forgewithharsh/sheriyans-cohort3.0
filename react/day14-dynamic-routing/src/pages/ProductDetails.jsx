import axios from "axios";
import React, { useEffect, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});
  const { id } = useParams();

  const getSingleProductsDetails = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setSingleProductData(res.data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    getSingleProductsDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Product Image */}
          <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-10">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="h-[450px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-medium capitalize text-blue-700">
              {singleProductData.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-900">
              {singleProductData.title}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <Star size={22} className="fill-yellow-400 text-yellow-400" />

              <span className="text-lg font-semibold">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-green-600">
              ${singleProductData.price}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {singleProductData.description}
            </p>

            <div className="mt-10 flex gap-5">
              <button className="flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-gray-800">
                <ShoppingCart size={22} />
                Add to Cart
              </button>

              <button className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold transition hover:bg-gray-100">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-gray-100 p-4 text-center">
                <h3 className="font-semibold">🚚 Free Delivery</h3>
              </div>

              <div className="rounded-xl bg-gray-100 p-4 text-center">
                <h3 className="font-semibold">↩️ 7 Days Return</h3>
              </div>

              <div className="rounded-xl bg-gray-100 p-4 text-center">
                <h3 className="font-semibold">🔒 Secure Payment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
