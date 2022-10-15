import React from "react";

export default function StoreFrequency( {row} ) {
  var cname = "store"
  if(row.rank % 2 == 1){
    cname = "store-alt"
  }
  return (
    <li className={cname}>
      <span className="store-ranks">{'#'+String(row.rank)}</span>
      <span className="store-name">{row.name}</span>
      <span className="store-spent">{String(row.spent) + " visits"}</span>
    </li>
  );
}