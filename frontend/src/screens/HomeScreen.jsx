import React from "react";

import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/product";

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
