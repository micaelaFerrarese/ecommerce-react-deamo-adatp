import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarritoContext } from "../contexts/carritoContext";
import Layout from "../components/Layout";
import axios from "axios";

const Producto = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();

  useEffect(() => {
    const getProductInfo = async () => {
      const product = await axios.get(
        `https://strapiecommerce-production-514e.up.railway.app/api/products/${id}?populate[0]=image`
      );
      if (!product) {
        window.location = "/notfound";
      }
      setProductInfo(product.data);
    };
    getProductInfo();
  }, [id]);

  const addToCart = () => {
    setCarrito([...carrito, productInfo]);
  };

  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-between">
        <div id="producto-izquierda" className="w-1/2 p-10">
          <img
            src={productInfo?.data.attributes.image.data.attributes.url}
            className="max-w-full h-auto"
          />
        </div>
        <div
          id="producto-derecha "
          className="w-1/2 h-full flex flex-col items-center justify-evenly"
        >
          <h1 className="text-5xl font-bold underline">
            {productInfo?.data.attributes.title}
          </h1>
          <p className="italic">{productInfo?.data.attributes.description}</p>
          <div className="flex items-center w-full justify-evenly">
            <button
              onClick={addToCart}
              className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 hover:scale-105"
            >
              AÑADIR A CARRITO
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;
