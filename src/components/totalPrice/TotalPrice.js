import React from "react";
import { Card } from "react-bootstrap";
import "./TotalPrice.css";

const TotalPrice = ({ total }) => {
  return (
    <Card className="total-price-card visible">
      <Card.Body>
        <Card.Title>
          <h2>Total Price</h2>
        </Card.Title>
        <Card.Text className="mt-3 text-end me-3 fs-4">
          £{total.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalPrice;
