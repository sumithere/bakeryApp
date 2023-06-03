import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";

function Cart(props){
    console.log(props.cart)
    return(<div>
        {props.cart.map((data)=>{return<CartItem key={data.id} {...data}></CartItem>})}
    </div>)
}

const mapStateToProps = (state) => {
    return {
        cart:state
    }
}

export default connect(mapStateToProps)(Cart);
