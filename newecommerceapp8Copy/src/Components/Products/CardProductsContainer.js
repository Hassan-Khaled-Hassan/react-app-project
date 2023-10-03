import React from 'react'
import { Container,Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'


const CardProductsContainer = ({
  title,
  btntitle,
  pathText,
  Items,
  loading,
}) => {
  console.log(Items,loading);
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">

          {loading === false ? (
            Items ? (
              Items.map((Item, index) => {
                return (

                    <ProductCard Item={Item} key={index} />
                );
              })
            ) : (
              <h2>لا يوجد منتجات حتي الان ...</h2>
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

export default CardProductsContainer
