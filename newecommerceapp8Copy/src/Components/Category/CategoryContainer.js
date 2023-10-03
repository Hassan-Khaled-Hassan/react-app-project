import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            // eslint-disable-next-line array-callback-return
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
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

export default CategoryContainer
