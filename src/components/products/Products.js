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
import "./Products.css";

const Products = ({ totalPrice, updateTotalPrice }) => {
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});

  // This hook is used to fetch the products from the API.
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
        alert("Failed to fetch products. Please try again later.");
      }
    };
    fetchProducts();
  }, []);

  // This function is used to update the selected color of a product.
  const handleSelectedColor = (productId, color) => {
    setSelectedColor({ ...selectedColor, [productId]: color });
  };

  // This function is used to update the total price of the cart.
  const handleBuy = (price) => {
    updateTotalPrice(totalPrice + price);
  };

  return (
    <Container className="mt-5">
      <Row>
        <h1 className="text-center mt-5">Products</h1>
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
  );
};

export default Products;
