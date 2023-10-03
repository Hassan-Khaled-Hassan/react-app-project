import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({ products, loading }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {loading === false ? (
          products ? (
            products.map((Item, index) => {
              return <AdminAllProductsCard Item={Item} key={index} />;
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
    </div>
  );
};

export default AdminAllProducts
