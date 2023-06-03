import React from "react";
import { connect } from "react-redux";

function CartItem(props) {
    let { cakeImage, cakeName, cakePrice } = { ...props }
    let styles = {
        height: "9rem",

    }
    console.log(props);
    return (
        <div className="cart-item">
            <div style={{
                display: "flex", justifyContent: "space-between",
                width: "400px"
            }}>
                <img style={styles} src={cakeImage}></img>
                <div className="cart-item-name">{cakeName}</div>
                <div className="cart-item-price">${cakePrice}</div>
            </div>
            <div>
                <button onClick={() => {
                    console.log(props.cart);
                    props.remove_from_cart({ id: props.id })
                }} className="remove-from-cart">-</button>
                {props.count}
                <button style={{ position: "static" }} onClick={() => {
                    console.log(props.cart);
                    props.add_to_cart({ id: props.id, cakeImage, cakeName, cakePrice })
                }} className="add-to-cart">+</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add_to_cart: (obj) => {
            console.log(obj);
            return dispatch({
                type: 'ADD_TO_CART',
                payload: obj
            })
        },
        remove_from_cart: (obj) => {
            console.log(obj);
            return dispatch({
                type: 'REMOVE_FROM_CART',
                payload: obj
            })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
