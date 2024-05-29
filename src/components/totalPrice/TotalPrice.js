import React from "react";
import { Card } from "react-bootstrap";
import "./TotalPrice.css";

const TotalPrice = ({ total }) => {
  return (
    <Card className="total-price-card">
      <Card.Body>
        <Card.Title>
          <h2>Total Price</h2>
        </Card.Title>
        <Card.Text className="mt-3">
          <h5>£{total.toFixed(2)}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalPrice;
