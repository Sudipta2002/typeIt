import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import "./Typingchallenge.css";
const Typingchallenge=({onInputChange,testInfo,selectedParagraph,timeRemaining,timeStarted})=>{
    // console.log("Inside typing challenge - ",testInfo);
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {/* logic for if time remaing less than zero it should show two digit numb */}
                {timeRemaining >=10?timeRemaining:`0${timeRemaining}`}
                
                </p>
                <p className="timer-info">
                    {/* logic for if the test starts then timestrated will be true and the heading will not be shown */}
                    {!timeStarted ?"Start the test":undefined}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        
                            {testInfo.map((individualLetterInfo,index)=>{
                                return <TestLetter key={index} individualLetterInfo={individualLetterInfo}/>
                            })}
                        
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea 
                    onChange={(e)=>onInputChange(e.target.value)}
                    className="textarea"placeholder="Start typing here">

                    </textarea>
                </div>
            </div>
        </div>


    );
}
export default Typingchallenge;