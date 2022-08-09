import React from "react";
import CardItem from "./CardItem";

function SectionItem({ productos }) {
  return (
    <ul className=" flex flex-row w-full justify-evenly items-center">
      {productos
        ? productos.map((p) => (
            <li key={p.id}>
              <CardItem key={p.id} producto={p} />
            </li>
          ))
        : null}
    </ul>
  );
}

export default SectionItem;

{
  /* <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productos.map((p) => (
            <CardItem key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </div> */
}
