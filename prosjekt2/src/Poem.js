import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

export class Poem extends Component {

    state = {
        data: [] 
    }

    componentDidMount() {
        axios.get("/text/poem1.json")
        .then(res => {
            const data = res.data;
            this.setState({ data });
        })
    }



    render() {
        let data = this.state.data;
        console.log(data);
        return (
            <h2> </h2>
        );
   }

}

