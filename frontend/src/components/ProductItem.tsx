import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { product } from "../types/product";
import Rating from "./Rating";

const ProductItem = ({ product }: { product: product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}></Rating>
        <Card.Text>₹ {product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button>Add To cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
