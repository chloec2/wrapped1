import React, { useEffect, useState} from 'react';
import { Stack, Box, Heading, Text } from '@chakra-ui/react'
import Popup from './Popup'
import ShareButtons from './ShareButtons';
import './TotalScore.css'
import './Popup.css'

// compares total monthly spending with the monthly goal

export default function TotalScore() {
    const today = new Date();
    const month = today.getMonth() + 1;

    // spending
    const [totalSpent, setTotalSpent] = useState([]);
    useEffect(() => {
        fetch('https://wrapped1-backend.herokuapp.com/api/user/0/0/transactions')
            .then(response => response.json())
            .then(data => {
                let spent = 0;
                for (var i in data) {
                    let checkmonth = 0
                    if (data[i].date.slice(1,2) == "/") {
                        checkmonth = data[i].date.slice(0,1);
                    }
                    else {
                        checkmonth = data[i].date.slice(0,2);
                    }

                    if (parseInt(checkmonth) == month) {
                        spent += data[i].amount;
                    }
                    
                }
                spent = Math.round(spent);
                setTotalSpent(spent);
            })
    });

    // goals
    const [totalGoal, setTotalGoal] = useState([]);
    useEffect(() => {
        fetch('https://wrapped1-backend.herokuapp.com/api/user/1/info')
            .then(response => response.json())
            .then(data => {
                let goal = Math.round(data.monthlySpendGoal);
                setTotalGoal(goal);
            })
    });

    // calculating score
    let score = 0;
    if (totalSpent == totalGoal){
        score = 100;
    }
    else {
        score = 200 - (totalSpent/totalGoal)*100
    }
    score = Math.round(score);
    

    // for the description
    var description;
    if (score < 70) {
        description = "Looks like you missed a couple goals. Don't worry, you'll get it next month!";
    }
    else if (score < 100) {
        description = "You were very close to meeting your goals this month. Good job!";
    }
    else if (score == 100) {
        description = "You perfectly met your goals this month! Great job!"
    }
    else {
        description = "You exceeded your goals this month. You're doing amazing!"
    }

    //popup
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    const ul = "Your score is calculated based on your ratio of total amount spent to the amount of your goal, per month. If your score is..."; 
    const li1 = "100, then you perfectly met your goal"; 
    const li2 = "less than 100, then you spent more than your goal";
    const li3 = "more than 100, then you spent less than your goal";

    ///////////
    return (
        <div className="totalScore">
            <div className="marginSpace"></div>

            <Heading marginBottom={2} color="#D22E1E"> Welcome to this month's Wrapped1! </Heading>
            <Text fontSize={25} color="#004879" fontWeight="bold">This month, you spent ${totalSpent} and your goal was ${totalGoal}.</Text>
            <Text fontSize={22}>Your score for this month is</Text>
            <Text fontSize={35} fontWeight="bold">{score}</Text>
            <Text fontSize={20}>{description}</Text>
            <Text fontSize={15}>(Keep in mind that a score of 100 indicates that you perfectly met your goals)</Text>
            
            <div className="marginSpace"></div>

            <ShareButtons />

            {/* popup */}
            <div className="popup">
                <input type="button" class="button" value="How your score is calculated" onClick={togglePopup}/>
                {isOpen && <Popup 
                    content={<p>
                        <ul>{ul}</ul>
                        <br/>
                        <li>{li1}</li>
                        <li>{li2}</li>
                        <li>{li3}</li>
                    </p>} 
                    handleClose={togglePopup}/>}
            </div>

            <div className="marginSpace"></div>
        </div>
    );
}