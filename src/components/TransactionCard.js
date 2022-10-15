import React, { useEffect } from 'react'
import "./TransactionCard.css"
import Transaction from './Transaction'
import { useState } from 'react'

const TransactionCard = () => {

    const [transactionData, setTransactionData] = useState([]);

    
    useEffect(() => {
        fetch('https://wrapped1-backend.herokuapp.com/api/user/1/0/transactions') 
        .then(response => response.json())
        .then(json => setTransactionData(json))
    })

    return (
        <div>
            <h1 className = "transTitle">Transactions</h1>
            <div className='card'>
                <div className="column-titles">
                    {/* Account */}
                    <div className='title'>
                        <p>ID</p>
                    </div>
                    <div className='title'>
                        {/* Date */}
                        <p>&ensp;Date</p>
                    </div>
                    {/* Location */}
                    <div className='title'>
                        <p>&ensp;&ensp;Location</p>
                    </div>
                    {/* Amount */}
                    <div className='title'>
                        <p>Amount</p>
                    </div>
                </div>
                {transactionData.map((transaction) => (
                    <Transaction account={transaction.id} date={transaction.date} location={transaction.location} amount={transaction.amount} />
                ))}
            </div>
        </div>

    )
}

export default TransactionCard
