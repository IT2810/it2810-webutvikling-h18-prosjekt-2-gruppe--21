import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

export class Poem extends Component {

    state = {
        lines: []
    }

    componentDidMount() {
        console.log("Hallo!");
        axios.get("/text/poem1.json")
        .then(res => {
            const lines = res.data;
            this.setState({ lines });
        })
        console.log(this.state.lines[0]);
    }



    render() {
        return (
            <div>
                <h2> {this.state.lines[2]} </h2>         
            </div>
        );
   }
}

