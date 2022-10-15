import React from 'react'
import CategoryTransactionCard from './CategoryTransactionCard'
import CategoryGraph from './CategoryGraph'

const CategoryTabPanel = ({categoryName}) => {
    return (
        <div>
            <CategoryGraph categoryName = {categoryName}/>
            <CategoryTransactionCard categoryName = {categoryName}/>
        </div>
    )
}

export default CategoryTabPanel
