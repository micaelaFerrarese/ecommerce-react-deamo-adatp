import React from "react";

const CarritoItem = ({ producto }) => {
  return (
    <div className="w-1/2 mx-auto  flex justify-around items-center text-xl border-slate-200 border-2 my-3 rounded-lg">
      <div className="w-1/4">
        <img
          src={producto.attributes.image.data.attributes.url}
          alt="producto.attributes.title"
          className="w-2/3 rounded-md"
        />
      </div>
      <div>
        <h3>{producto.attributes.title}</h3>
      </div>
      <div>
        <p> $ {producto.attributes.price} args.</p>
      </div>
    </div>
  );
};

export default CarritoItem;
