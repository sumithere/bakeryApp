import React from "react";

export function CupCakesDetails(props){
    let {image,heading,description} = {...props}
    let styles={
        display:"flex",
        height: "100%",
        paddingTop: "40px"
    }
    return(
    <div className="cupcake-details" style={styles}>
        <div style={{paddingTop:"34px"}}><img className="cupcake-img" src={image}></img></div>
        <div className="head-des">
            <div className="cupcake-heading">{heading}</div>
            <div className="cupcake-description">{description}</div> 
        </div>
    </div>
    )
}