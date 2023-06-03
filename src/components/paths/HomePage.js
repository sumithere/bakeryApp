import React from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Items } from "../Items";
import { Link } from "react-router-dom";


export function HomePage() {
    return (
        <div>
            <Header></Header>
            <Heading></Heading>
            <Items></Items>
            <Link to="/cart"><i style={{
                position: "absolute",
                top: "5px",
                right: "20px"
            }} class="fa fa-shopping-cart fa-2x"></i></Link>
        </div>
    )
}

