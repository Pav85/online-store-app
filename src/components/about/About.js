import React from "react";
import { Container, Row, Col, Figure, Carousel } from "react-bootstrap";
import storeLogo from "../../assets/my-online-store-high-resolution-logo-black.png";
import storeImage1 from "../../assets/store.png";
import storeImage2 from "../../assets/store2.png";
import storeImage3 from "../../assets/store3.png";

const About = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center mb-3 align-items-center">
        <Col md={4} className="pt-5">
          <Figure>
            <Figure.Image
              width={500}
              height="auto"
              alt="store-logo"
              src={storeLogo}
            />
          </Figure>
        </Col>
        <Col md={8}>
          <h1 className="mt-5 text-center">About Us </h1>
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
      <Row className="justify-content-center">
        <Col md={4} className="text-center mt-4">
          <h2 className="text-center fs-2 mt-5 mb-5">Contact Us</h2>
          <p className="fs-5">
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@myonlinestore.com">
              contact@myonlinestore.com
            </a>
          </p>
          <p className="fs-5">
            <strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
        </Col>
        <Col md={8}>
          <Carousel className="mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={storeImage1}
                alt="First slide"
                width={400}
                height="auto"
              />
              <Carousel.Caption>
                <h3>Discover our latest collection!</h3>
                <p>Shop now for exclusive deals and new arrivals.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={storeImage2}
                alt="Second slide"
                width={400}
                height="auto"
              />
              <Carousel.Caption>
                <h3>Latest Collections</h3>
                <p>Discover our latest accessories and gadgets.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={storeImage3}
                alt="Third slide"
                width={400}
                height="auto"
              />
              <Carousel.Caption>
                <h3>Don't miss out!</h3>
                <p>
                  Enjoy our special sale with amazing discounts and offers. Shop
                  today and save big!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
