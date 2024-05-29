import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Dropdown,
  DropdownButton,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import TotalPrice from "../totalPrice/TotalPrice";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=10"
        );
        const productsWithColors = response.data.map((product) => ({
          ...product,
          colors: ["Black", "White", "Grey"],
        }));
        setProducts(productsWithColors);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSelectedColor = (productId, color) => {
    setSelectedColor({ ...selectedColor, [productId]: color });
  };

  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className="container mt-3">
      <Container className="mt-5">
        {totalPrice > 0 && <TotalPrice total={totalPrice} />}
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-3 mt-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="card-img mt-3"
                />
                <Card.Body className="card-body-custom">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <strong>£{product.price}</strong>
                  </Card.Text>
                  <DropdownButton
                    id={`dropdown-basic-button-${product.id}`}
                    title={selectedColor[product.id] || "Select Color"}
                    onSelect={(e) => handleSelectedColor(product.id, e)}
                  >
                    {product.colors.map((color, index) => (
                      <Dropdown.Item key={index} eventKey={color}>
                        {color}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Button
                    className="mt-2"
                    onClick={() => handleBuy(product.price)}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
