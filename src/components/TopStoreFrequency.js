import React from "react";
import Store from "./StoreFrequency"



export default function TopStoreFrequency({ TopStoresData }) {
  var sortedTopStores = TopStoresData.sort((a,b)=> a.spent > b.spent ? -1: 1 )

  for(var i = 0; i < sortedTopStores.length; i++){
    sortedTopStores[i]["rank"] = i + 1
  }

  console.log(sortedTopStores)
  return(
  <div className="stores-wrapper">
    <div className="heading-container">
      <h3 className="stores-header">Where you've been the most</h3>
      <hr></hr>
    </div>
  {sortedTopStores.map(fakeRow => (
      <Store row={fakeRow}></Store>

  ))}

  </div>
    
    );





}