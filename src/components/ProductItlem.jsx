import React from "react";

export default function ProductItlem({ item }) {
  return (
    <div className="item" style={{ backgroundImage: `url(${item.image})` }}>
      <p>{item.discription}</p>
    </div>
  );
}
