import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import useViewSearchProduct from '../../Hooks2/Products/useViewSearchProduct'

const ShopProductsPage = () => {
    const [Items, loading, Paginations, getPage, GetProduct, Result] =
      useViewSearchProduct();
    var pageCount = 0;
    if (Paginations) {
      pageCount = Paginations.numberOfPages;
    } else {
      pageCount = 0;
    }
    return (
      <div style={{ minHeight: "670px" }}>
        <CategoryHeader />
        <Container>
          <SearchCountResult
            title={"هناك" + ` " ` + Result + ` " ` + " نتيجه بحث "}
            GetProduct={GetProduct}
          />
          <Row className="d-flex flex-row">
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11">
              <CardProductsContainer
                Items={Items}
                loading={loading}
                title=""
                btntitle=""
              />
            </Col>
          </Row>
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onpress={getPage} />
          ) : null}
        </Container>
      </div>
    );
}

export default ShopProductsPage
