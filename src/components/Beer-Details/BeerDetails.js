import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

function BeerDetails() {
  const post = useLoaderData();
  return (
    <Container className="my-5">
        <h1>Product Details</h1>
      <Row>
        {post.map((data) => (
          <>
            <Col md={6}>
              <img
                src={data.image_url}
                alt="Product"
                width={200}
                height={200}
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2>{data.name}</h2>
              <p>
               {data.description}
              </p>
              <p className="font-weight-bold">$19.99</p>
              <Button variant="primary">Add to Cart</Button>
              <Link to="..">
                <Button variant="primary mx-4">Back</Button>
              </Link>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default BeerDetails;

export async function loader({ params }) {
  const response = await fetch("https://api.punkapi.com/v2/beers/" + params.id);
  const resData = await response.json();
  console.log(resData);
  return resData;
}
