import React from 'react'
import { Container,Row ,Col, Spinner} from 'react-bootstrap'

const CategoryHeader = ({ Members, loading }) => {
  console.log();
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header ">الكل</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader
