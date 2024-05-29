import React from "react";
import { Card } from "react-bootstrap";
import "./TotalPrice.css";

const TotalPrice = ({ total, isVisible }) => {
  return (
    <Card className={`total-price-card ${isVisible ? "visible" : ""}`}>
      <Card.Body>
        <Card.Title>
          <h2>Total Price</h2>
        </Card.Title>
        <Card.Text className="mt-3">£{total.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalPrice;
