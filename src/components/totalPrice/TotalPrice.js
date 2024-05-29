import React from "react";

const TotalPrice = ({ total }) => {
  return (
    <div className="total-price">
      <h2>Total price: ${total}</h2>
    </div>
  );
};

export default TotalPrice;
