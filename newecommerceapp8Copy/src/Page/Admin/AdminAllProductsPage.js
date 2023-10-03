import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import useAdminALLproducts from '../../Hooks2/Admin/useAdminALLproducts'
import { useState } from 'react'
import { useEffect } from 'react'
import UnopDropdown from 'unop-react-dropdown'
import { Link } from 'react-router-dom'
import sort from "../../images/sort.png";

const AdminAllProductsPage = () => {
    const [Items, Paginations, loading, getPage] = useAdminALLproducts();
    var pageCount = 0;
    if (Paginations){
        pageCount = Paginations.numberOfPages;
    }
    else{
        pageCount=0;
    }
    const handler = () => {};
    // ---------------------------------
    const [value, setValue] = useState(false);
    const updateValueBasedOnWindowWidth = () => {
      const innerWidth = window.innerWidth;

      // Modify the value based on your requirements
      if (innerWidth <= "575") {
        setValue(true);
      } else {
        setValue(false);
      }
    };
    useEffect(() => {
      window.addEventListener("resize", updateValueBasedOnWindowWidth);
      updateValueBasedOnWindowWidth();
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", updateValueBasedOnWindowWidth);
      };
    }, []);
      return (
        <div className="container-fluid container-lg admin">
          <Row className="py-3">
            {value === false ? (
              <Col sm="3" xs="2" md="2">
                <AdminSideBar />
              </Col>
            ) : (
              <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={
                  <p className="mx-1 admin-side">
                    <img
                      width="20px"
                      height="20px"
                      className="ms-1"
                      src={sort}
                      alt=""
                    />
                    ترتيب حسب
                  </p>
                }
                delay={0}
                align="CENTER"
                hover
              >
                <div
                  className="card-filter"
                  style={{ backgroundColor: "rgb(0 19 38)" }}
                >
                  <Link
                    to="/admin/allorders"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                      اداره الطلبات
                    </div>
                  </Link>
                  <Link
                    to="/admin/allproducts"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                      اداره المنتجات
                    </div>
                  </Link>
                  <Link to="/admin/addbrand" style={{ textDecoration: "none" }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                      اضف ماركه
                    </div>
                  </Link>

                  <Link
                    to="/admin/addcategory"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                      اضف تصنيف
                    </div>
                  </Link>

                  <Link
                    to="/admin/addsubcategory"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                      اضف تصنيف فرعي
                    </div>
                  </Link>
                  <Link
                    to="/admin/addproduct"
                    style={{ textDecoration: "none", borderBottom: "none" }}
                  >
                    <div
                      className="admin-side-text my-1 p-2 mx-auto text-center"
                      style={{ borderBottom: "none" }}
                    >
                      اضف منتج
                    </div>
                  </Link>
                </div>
              </UnopDropdown>
            )}
            <Col sm="9" xs="12" md="10">
              <AdminAllProducts products={Items} loading={loading} />
              {pageCount > 1 ? (
                <Pagination pageCount={pageCount} onpress={getPage} />
              ) : null}
            </Col>
          </Row>
        </div>
      );
}

export default AdminAllProductsPage
