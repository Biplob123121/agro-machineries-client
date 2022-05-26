import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderList = ({order, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>{!order.paid &&
                <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-primary">Pay now</button></Link>}
                {order.paid && <span className='rext-secondary'>paid</span>
                }
            </td>
        </tr>
    );
};

export default MyOrderList;