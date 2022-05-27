import React from 'react';

const HistoryTable = ({ order, index }) => {
    return (
        <>
            {order.paid && <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.transactionId}</td>
                <td><span className='text-primary font-bold uppercase'>Paid</span></td>
            </tr>
            }
        </>

    );
};

export default HistoryTable;