import React from 'react'
import { Col,Card,Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../../redux/actions/ProductAction';
const AdminAllProductsCard = ({ Item }) => {
  const [show,SetShow]=useState(false);
  const dispatch=useDispatch()

  const handleDelete= async ()=>{
     await  dispatch(DeleteProduct(Item._id));
     SetShow(false);
     console.log(Item._id);
    window.location.reload();
  }
  const handleClose=()=>{
   SetShow(false);
  }
  const handleShow=()=>{
   SetShow(true);
  }
  return (
    <Col xs="6" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تأكيد الحذف ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل تريد حذف هذا المنتج ؟</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="dark" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2 Product"

      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={handleShow}>
              ازاله
            </div>
            <Link
              to={`/admin/editProduct/${Item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${Item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={Item.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{Item.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{Item.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{Item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard
