import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Navbar.css";

function Home() {
  return (
    <div>
      <Navbar className="color-nav" variant="dark">
        <img
          className="ms-3 me-3"
          width="55px"
          alt="bellow office"
          src="./DeusVultLogo.png"
        />
        <Navbar.Brand className="brand-nav" href="/bellow">
          <strong>BELLOWER</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/profile" className="nav-link">
                Welcome, User!
              </Link>
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
              <Link to="/" className="nav-link">
                SignIn
              </Link>
              <Link to="/bellow" className="nav-link">
                All Bellows
              </Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <Navbar.Text>
              <LoadingIndicator />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </div>
  );
}

export default Home;
