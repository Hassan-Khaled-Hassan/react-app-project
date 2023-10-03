import React from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
const ProductCard = ({ Item }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card className="my-2 homeProduct">
        <Link to={`/products/${Item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={Item.imageCover}
          />
        </Link>
        <div
          className="d-flex justify-content-end mx-2"
          style={{ marginTop: "10px" }}
        >
          <img
            src={favoff}
            alt=""
            className="text-center hart"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{Item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{Item.ratingsQuantity}</div>
              </div>
              <div className="d-flex">
                <div className="card-currency mx-1">جنيه</div>
                <div className="card-price">{Item.price}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard
