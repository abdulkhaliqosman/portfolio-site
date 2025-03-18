import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

export default class Content extends Component {

    render() {
        return (
            <div className="App-content">
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />
                </Switch>
                <br />

            </div>

        );
    }
}
