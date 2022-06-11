import React from 'react';
import {
    Table
}from 'react-bootstrap';
import './Style/YourOrders.css'
const YourOrders = () => {
    const orders = [
        {
            "userID": 1,
            "itemID": 1,
            "number": 3,
            "itemPrice": 50, 
            "itemName": 'Name',
            "itemImg": "https://loremflickr.com/320/240?random=50"
        },
        {
            "userID": 1,
            "itemID": 1,
            "number": 3,
            "itemPrice": 50, 
            "itemName": 'Name',
            "itemImg": "https://loremflickr.com/320/240?random=50"

        }
        ,{
            "userID": 1,
            "itemID": 1,
            "number": 3,
            "itemPrice": 50, 
            "itemName": 'Name',
            "itemImg": "https://loremflickr.com/320/240?random=50"
        },
        {
            "userID": 1,
            "itemID": 1,
            "number": 3,
            "itemPrice": 50, 
            "itemName": 'Name',
            "itemImg": "https://loremflickr.com/320/240?random=50"
        }
    ]
    const displayOrders = orders.map((item) =>(
        
        <tr>
            <td><img src={item.itemImg} alt='Product'/></td>
            <td>{item.itemName}</td>
            <td className='number'>{item.number}</td>
            <td><span>${item.itemPrice}</span></td>
        </tr>
        
    ))
    return(
        <div className='container'>
            <Table responsive>
                <thead>
                    <tr>
                    <td>Orders</td>
                    <td>Product</td>
                    <td className='number'>Quatity</td>
                    <td><span>Price</span></td>
                    </tr>
                </thead>
                <tbody>
                    {displayOrders}
                </tbody>
            </Table>
        </div>

    )
};

export default YourOrders;
