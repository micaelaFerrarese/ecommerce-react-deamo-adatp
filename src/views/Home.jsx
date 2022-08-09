import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionItem from "../components/SectionItem";
import Layout from "../components/Layout";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(
        `https://strapiecommerce-production-514e.up.railway.app/api/products?populate[0]=image`
      );
      setProductos(response.data.data);
    };
    getAllProducts();
  }, []);

  return (
    <Layout>
      <SectionItem productos={productos}></SectionItem>
    </Layout>
  );
};

export default Home;
