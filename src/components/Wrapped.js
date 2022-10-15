import React, {useEffect, useState} from 'react'
import TopStoresData from "./TopStores.json";
import { Stack } from '@chakra-ui/react'
import TopStores from './TopStores.js';
import Feature from './Feature'
import TotalScore from './TotalScore'
import "./Wrapped.css";
import Header from './Header';

const Wrapped = () => {

    var testData = {}
    var spent = 0
    const today = new Date();
    const month = today.getMonth() + 1;
    const [allData, setData] = useState([]);
    useEffect(() => {
      fetch('https://wrapped1-backend.herokuapp.com/api/user/0/0/transactions')
      .then(response => response.json())
      .then(json => setData(json))
    }, []) 

    for(var i in allData){
      var category = allData[i]["category"]
      let checkMonth = 0
      if(allData[i].date.slice(1,2) === "/") {
        checkMonth = allData[i].date.slice(0, 1)
      }
      else{
        checkMonth = allData[i].date.slice(0, 2)
      }

      if(parseInt(checkMonth) === month) {
        spent += allData[i].amount;
        if(category in testData){
          testData[category] += allData[i]["amount"]
        }
        else{
          testData[category] = allData[i]["amount"]
        }
      }
    }

    let data = Object.entries(testData)

    let sorted = data.sort(function(a,b) { return b[1] - a[1] });
    let topWraps = sorted.slice(0, 5);
    let goals = [35, 30, 15, 5, 10];

    return (
      <div>
        <Header />
        <TotalScore/>
        
        {topWraps.map((category, index) => (
          <Stack style={{marginLeft: "auto", marginRight: "auto", marginTop: "10px"}} spacing={8} backgroundColor="#FBEAE9" width = '1200px'>
            <Feature
              title={category[0]}
              spent={category[1].toFixed(2)}
              percent={(category[1]/spent).toFixed(2) * 100}
              goal={goals[index]}
            />
          </Stack>
        ))}

      
      <div>
          <h1 style={{marginTop: "100px", fontSize: "25px", marginBottom: "50px"}}>A Recap of Where You've Spent This Year</h1>
          <TopStores TopStoresData={TopStoresData} />
      </div>
    </div>
    );



}

export default Wrapped;
