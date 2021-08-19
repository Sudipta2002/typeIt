import React from 'react';
import landing from '../../Assets/land2.png';
import './Land.css';
import Typewriter from 'typewriter-effect';
const Land =()=>{
    return(
        <div className="land-container">
            <div data-aos="fade-right" className="land-left">
                <h1 className="land-text">Can you type...</h1>
                <div className="typewriter-container">
                <Typewriter
                    options={{
                        strings: ['Fast?', 'Correctly?','Quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
            </div>
            <div className="land-right">
                <img data-aos="fade-left" className="land-image" src={landing} alt="land-logo"/>
            </div>
        </div>
    )
}

export default Land;