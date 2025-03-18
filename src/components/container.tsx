import React, { Component } from 'react';

import { BrowserRouter as Router, } from "react-router-dom";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default class Container extends Component {

    render() {
        return (
            <div className="App container">
                <Router>
                    <Header />
                    <Content />
                    <Footer />
                </Router>
            </div>
        );
    }
}
