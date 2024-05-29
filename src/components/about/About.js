import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import storeLogo from "../../assets/my-online-store-high-resolution-logo-black.png";
import storeImage1 from "../../assets/store.png";
import storeImage2 from "../../assets/store2.png";

const About = ({ totalPrice, isTotalPriceVisible }) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center mb-3">
        <Col md={4}>
          <Figure>
            <Figure.Image
              width={400}
              height="auto"
              alt="store-logo"
              src={storeLogo}
            />
          </Figure>
        </Col>
        <Col md={8}>
          <h1 className="mt-5  text-center">About Us </h1>
          <p className="mt-3">
            Welcome to <strong>My Online Store!</strong> We specialize in
            offering a little bit of everything when it comes to accessories.
            Whether you're looking for the latest fashion jewelry, stylish
            handbags, or practical tech gadgets, we have it all. Our mission is
            to provide high-quality products at affordable prices, all while
            delivering exceptional customer service. Explore our diverse
            collection and find the perfect accessory to enhance your lifestyle.
            Thank you for choosing My Online Store!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
