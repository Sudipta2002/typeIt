import React from 'react';
import "./ChallengeSection.css";
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection =({startAgain,onInputChange,testInfo,selectedParagraph,words,character,wpm,timeRemaining,timeStarted})=>{ 
    
    
    return(
        <div className="ChallengeSection-container">
            <div className="text-left">
                <h1 data-aos="fade-down"className="ChallengeSection-text">Check your Typing Speed</h1>
            </div>
            <TestContainer startAgain={startAgain} onInputChange={onInputChange} testInfo={testInfo}selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} timeStarted={timeStarted} words={words} character={character} wpm={wpm}/>
        </div>
    )
}
export default ChallengeSection;