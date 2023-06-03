import React from "react";
import { CupCakes } from "./CupCakes";

export function Header(){
    let styles={
        backgroundColor:"#e4ddd1",
        height:"8rem",
        width:"100%",
    }
    return(<div style={styles}>
<CupCakes></CupCakes>
    </div>)
}