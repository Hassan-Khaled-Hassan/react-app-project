import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditProducts from "../../Components/Admin/AdminEditProduct";
import { useEffect } from "react";
import { useState } from "react";
const AdminEditProductsPage = () => {
    const handler = () => {};
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
    <Container>
      <Row className="py-3">
        {value === false ? (
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>
        ) : null}

        <Col sm="9" xs="12" md="10">
          <AdminEditProducts value={value} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductsPage;
