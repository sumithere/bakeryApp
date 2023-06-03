import React from "react";
import cupcake1 from "../icons/cupcake1.png";
import cupcake2 from "../icons/cupcake2.png";
import cupcake3 from "../icons/cupcake3.png";
import { CupCakesDetails } from "./CupCakesDetails";

export function CupCakes(){
    
    return(<div className="cupcake-container">
       <div className="cupcake-box first shadow-box">
        <CupCakesDetails image={cupcake1} heading={"Products"} description={"lorem lorem lorem lorem lorem lorem lorem lorem "}></CupCakesDetails>
       </div>
       <div className="cupcake-box">
       <CupCakesDetails image={cupcake2} heading={"Cake Class"} description={"lorem lorem lorem lorem lorem lorem lorem lorem "}></CupCakesDetails>
       </div>
       <div className="cupcake-box last shadow-box">
       <CupCakesDetails image={cupcake3} heading={"Recipes"} description={"lorem lorem lorem lorem lorem lorem lorem lorem "}></CupCakesDetails>
       </div>
    </div>)
}