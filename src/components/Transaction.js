import React from 'react'
import './Transaction.css'

const Transaction = ({account, date, location, amount}) => {
    return (
        <div>
            <div className="transaction">
                {/* Account */}
                <div className='transaction-item'>
                    <p>{account}</p>
                </div>
                <div className='transaction-item'>
                    {/* Date */}
                    <p>{date}</p>
                </div>
                {/* Location */}
                <div className='transaction-item'>
                    <p>{location}</p>
                </div>
                {/* Amount */}
                <div className='transaction-item'>
                    <p>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default Transaction
