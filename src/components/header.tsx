import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Navbar className="App-container-width mx-auto" expand="lg">
                    <Navbar.Brand as={Link} to="/" className="App-navbar-brand-item">
                        <div className="ak-link">
                            Aykay.io
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ak-nav mr-auto">
                            <Nav.Link as={Link} to="/projects/" className="ak-nav-item">
                                <div className="ak-link">
                                    Projects
                                </div>
                            </Nav.Link>
                            <Nav.Link rel="noopener noreferrer" className="ak-nav-item">
                                <a className="ak-link" target="_blank" href="https://dev.to/abdulkhaliqosman">
                                    Blog
                                </a>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact/" className="ak-nav-item">
                                <div className="ak-link">
                                    Contact
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="https://www.linkedin.com/in/abdul-khaliq-bin-osman/">
                                <i className="fa fa-linkedin-square fa-3"></i>
                            </Nav.Link>
                            <Nav.Link href="https://github.com/abdulkhaliqosman/">
                                <i className="fa fa-github-square fa-2"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
};