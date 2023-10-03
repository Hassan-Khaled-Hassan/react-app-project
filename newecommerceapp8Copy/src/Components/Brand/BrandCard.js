import React from 'react'
import { Col,Card } from 'react-bootstrap'

const BrandCard = ({img}) => {
      let Cat = "";
      if (window.location.pathname === "/") {
        Cat = "Brand";
      } else {
        Cat = "";
      }
    return (
      <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className={`my-2 d-flex justify-content-center ${Cat}`}
      >
        <Card
          className="my-1 card-type"
        >
          <Card.Img style={{ width: "78%", height: "109px" }} src={img}  className='card-images'/>
        </Card>
      </Col>
    );
}

export default BrandCard
