import React from 'react'
import TransactionCard from './TransactionCard';
import Graphs from './Graphs';

const HomeTabPanel = () => {
    return (
        <div>
            <Graphs/>
            <TransactionCard />
        </div>
    )
}

export default HomeTabPanel
