import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./Assets/Logo.png";
import search from "./Assets/Search.png";

function Header() {
  return (
    <div>
      <Container className="navbarr">
        <Row>
          <Col xs={6}>
            <img src={logo}></img>
          </Col>
          <Col md="auto">Home</Col>
          <Col md="auto">Categories</Col>
          <Col md="auto">Shop</Col>
          <Col md="auto">About Us</Col>
          <Col md="auto">
            <Form className="d-flex" id="search">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Col>
          <Col md="auto">
            <img src={search}></img>
          </Col>
        </Row>
      </Container>
      {/* Line */}
      <div
        style={{
          borderTop: "2px solid #2f2f2f ",
          marginLeft: 20,
          marginRight: 20,
        }}
      ></div>
    </div>
  );
}
export default Header;
