import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import Typingchallenge from '../TypingChallenge/Typingchallenge';
import "./TypingChallengeContainer.css";
const TypingChallengeContainer=({onInputChange,testInfo,selectedParagraph,words,character,wpm,timeRemaining,timeStarted})=>{
    return(
        <div className="typing-challenge-container">
            {/*Details Section */}
            <div className="details-container">
                {/*Words Typed */}
                <ChallengeDetailsCard cardname="Words" cardvalue={words}/>
                {/*characters Typed */}
                <ChallengeDetailsCard cardname="Character" cardvalue={character}/>
                {/*Speed */}
                <ChallengeDetailsCard cardname="Speed" cardvalue={wpm}/>
            </div>
            {/* The Real Challenge*/}
            <div className="realchallenge-container">
                <Typingchallenge onInputChange={onInputChange} testInfo={testInfo}timeRemaining={timeRemaining} timeStarted={timeStarted} selectedParagraph={selectedParagraph}/>
            </div>
        </div>
    )
}
export default TypingChallengeContainer;