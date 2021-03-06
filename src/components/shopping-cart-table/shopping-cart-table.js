import React from "react";
import { connect } from 'react-redux';
// import {
//     bookAddedToCart,
//     bookRemovedFromCart,
//     allBooksRemovedFromCart } from '../../actions';
import './shopping-cart-table.css';


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{items.map(renderRow)}</tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
};
// описує які дані хоче отримати з Redux-store(books)
const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

//описує дії які хоче виконати компонент і екшини передавати в store
const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`);
        },

        onDecrease: (id) => {
            console.log(`Decrease ${id}`);
        },

        onDelete: (id) => {
            console.log(`Delete ${id}`);
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
