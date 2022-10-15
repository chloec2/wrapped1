import React, { useEffect, useState } from "react";

import Store from "./Store"
import StoreFrequency from "./StoreFrequency";



export default function TopStores({ TopStoresData }) {
  var data = []
  var retailersSpent = {}
  var retailersFrequency = {}
  var categoriesSpent = {}
  
  const [top5spent,setTop5Spent] = useState([]);
  const [top5freq,setTop5Freq] = useState([]);
  const [top5cat,setTop5Cat] = useState([]);



  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://wrapped1-backend.herokuapp.com/api/user/0/0/transactions')
        .then(response => response.json())
        .then(data => {
          for(var i in data){
            var category = data[i]["category"]
            var retailer = data[i]["location"]
            //console.log(category)
            if(category in categoriesSpent){
              categoriesSpent[category] += Math.round(data[i]["amount"])
            } else{
              categoriesSpent[category] = Math.round(data[i]["amount"])
            }

            if(retailer in retailersSpent){
              retailersSpent[retailer] += Math.round(data[i]["amount"])
              retailersFrequency[retailer] += 1
            } else {
              retailersSpent[retailer] = Math.round(data[i]["amount"])
              retailersFrequency[retailer] = 1
            }
          }

          // console.log(categoriesSpent)
          // console.log(retailersSpent)
          // console.log(retailersFrequency)

          var lastSpent = -1
          var spentMaxLoc = ""
          var top5spent = []
          for(var i = 0; i < 5; i++){
            var spentMax = 0
            for (const [key, value] of Object.entries(retailersSpent)) {
              if(lastSpent == -1){
                if(value > spentMax){
                  spentMax = value
                  spentMaxLoc = key
                }
              } else if (value < lastSpent && value > spentMax){
                if(value > spentMax){
                  spentMax = value
                  spentMaxLoc = key
                }
              }
            }
            var temp = {}
            temp["name"] = spentMaxLoc
            temp["spent"] = spentMax
            temp["rank"] = i + 1
            top5spent.push(temp)
            lastSpent = spentMax
          }
          setTop5Spent(top5spent);
        
          
          var lastFreq = -1
          var freqMaxLoc = ""
          var top5freq = []
          for(var i = 0; i < 5; i++){
            var freqMax = 0
            for (const [key, value] of Object.entries(retailersFrequency)) {
              if(lastFreq == -1){
                if(value > freqMax){
                  freqMax = value
                  freqMaxLoc = key
                }
              } else if (value < lastFreq && value > freqMax){
                if(value > freqMax){
                  freqMax = value
                  freqMaxLoc = key
                }
              }
            }
            var temp = {}
            temp["name"] = freqMaxLoc
            temp["spent"] = freqMax
            temp["rank"] = i + 1
            top5freq.push(temp)
            lastFreq = freqMax
          }
          setTop5Freq(top5freq);



          var lastCat = -1
          var catMaxLoc = ""
          var top5cat = []
          for(var i = 0; i < 5; i++){
            var catMax = 0
            for (const [key, value] of Object.entries(categoriesSpent)) {
              if(lastCat == -1){
                if(value > catMax){
                  catMax = value
                  catMaxLoc = key
                }
              } else if (value < lastCat && value > catMax){
                if(value > catMax){
                  catMax = value
                  catMaxLoc = key
                }
              }
            }
            var temp = {}
            temp["name"] = catMaxLoc
            temp["spent"] = catMax
            temp["rank"] = i + 1
            top5cat.push(temp)
            lastCat = catMax
          }
          setTop5Cat(top5cat)
        })

    

        

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  //console.log(data)

  //console.log(sortedTopStores)
  return(

  <div style={{marginLeft: 65}} className='list-wrapper'>
    <div className='store-list'>
      <div className="stores-wrapper">
        <div className="heading-container">
          <h3 className="stores-header">Where you've spent the most</h3>
          <hr></hr>
        </div>
        {top5spent.map(fakeRow => (
            <Store row={fakeRow}></Store>
        ))}
      </div>
    </div>
    <div className='store-list'>
      <div className="stores-wrapper">
        <div className="heading-container">
          <h3 className="stores-header">Where you've went the most</h3>
          <hr></hr>
        </div>
        {top5freq.map(fakeRow2 => (
            <StoreFrequency row={fakeRow2}></StoreFrequency>
        ))}
      </div>
    </div>
    <div className='store-list'>
      <div className="stores-wrapper">
        <div className="heading-container">
          <h3 className="stores-header">Category Breakdown</h3>
          <hr></hr>
        </div>
        {top5cat.map(fakeRow2 => (
            <Store row={fakeRow2}></Store>
        ))}
      </div>
    </div>
  </div>
  
    
    );





}