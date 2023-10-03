import React from 'react'
import BrandCard from './BrandCard'
import { Container, Row, Spinner } from 'react-bootstrap';
const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            // eslint-disable-next-line array-callback-return
            data.map((item, index) => {
              return <BrandCard img={item.image} />;
            })
          ) : (
            <h2>لا يوجد تصنيفات اخري حتي الان ...</h2>
          )
        ) : (
          <Spinner
            animation="border"
            variant="primary"
            className="my-0 mx-auto"
          />
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer
