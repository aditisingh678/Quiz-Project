

import React from "react";
import { data } from "./data";
import { useState } from "react";
import './Style.css';

export default function QuizApp() {
    const [index, setIndex] = useState(0);
    const [score,setScore] = useState(0);
    const [option,setOption] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);


    const correctAnswers = ['option1', 'option3', 'option1', 
        'option4', 'Option2', 'option3','option1', 'option4'];

        const handleSelect = (SelectedOption)=>{
            setOption(SelectedOption)
        }

    const handleNext = () => {
        if(option === correctAnswers[index]){
            setScore(score+1)
        }
        if(index < data.length - 1) {
          setIndex(index + 1);
          setOption(null);

    } else {
          setQuizFinished(true);
    }
};

    if(quizFinished){

    return (
        <div>
            <h1>Quiz Finished.....!</h1>
        <h3>Your Score is: {score} out of {data.length}</h3>
        </div>
    );

    }

return (
        <div className='quiz'>   
           <h1>ADITI  SINGH</h1>
            <h1>KodQuiz</h1>  

           <h3>{data[index].Question}</h3>

                  <ul>
                    <li className={option === 'Option1'?'selected':''}
                    onClick={()=>handleSelect('Option1')}>{data[index].Option1}</li>

                    <li className={option === 'Option2'?'selected':''}
                     onClick={()=>handleSelect('Option2')}>{data[index].Option2}</li>

                    <li className={option === 'Option3'?'selected':''}
                    onClick={()=>handleSelect('Option3')}>{data[index].Option3}</li>

                    <li className={option === 'Option4'?'selected':''}
                     onClick={()=>handleSelect('Option4')}>{data[index].Option4}</li>

                  </ul>

                  <button onClick={handleNext} disabled = {!option}>Next</button>

                  <h5>Question {index + 1} out of {data.length}</h5>
                  
                  </div>

    );
  }




