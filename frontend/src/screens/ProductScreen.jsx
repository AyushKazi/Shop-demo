import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/url/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  // finding out the clicked product by comapring id from params
  //const product = products.find((p) => p._id === productId);

  // console.log(product);

  return (
    <>
      <Link className="btn btn-outline-secondary" to="/">
        Go Back
      </Link>
      <Row>
        {/* first column for image */}
        <Col md="5">
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* second column for itms descriptions */}
        <Col md="4">
          <ListGroup variant="flush">
            {/* Listing the features of product */}
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : $ {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : $ {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* third column for add cart functions */}
        <Col md="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className=" btn-secondary btn-block"
                  disabled={product.countInStock === 0}
                >
                  Add Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
