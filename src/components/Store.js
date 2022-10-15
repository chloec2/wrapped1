// import React from "react";


// export default functionStore({ row }) {
//     return(
//         <div className="store">
        
//         <h1>{row.name}</h1>
//         <h1>{row.spent}</h1>

//         </div>
//     );


// }

import React from "react";

export default function Store( {row} ) {
  var cname = "store"
  if(row.rank % 2 == 1){
    cname = "store-alt"
  }
  return (
    <li className={cname}>
      <span className="store-ranks">{'#'+String(row.rank)}</span>
      <span className="store-name">{row.name}</span>
      <span className="store-spent">{"$" + String(row.spent)}</span>
    </li>
  );
}
