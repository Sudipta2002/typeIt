import React from 'react';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain';
const TestContainer=(
    {startAgain,onInputChange,testInfo,selectedParagraph,words,character,wpm,timeRemaining,timeStarted}
)=>{
    

    return(
        <div className="test-container">
            {timeRemaining>0 ?(
                <div className="typing-challenge-cont">
                    <TypingChallengeContainer onInputChange={onInputChange}testInfo={testInfo} selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timeStarted={timeStarted} words={words} character={character} wpm={wpm}/>
                </div>
            ):(
                <div className="try-again-cont">
                    <TryAgain startAgain={startAgain}words={words} character={character} wpm={wpm}/>
                </div> 
            )}
            
            </div>
    )
}
export default TestContainer;