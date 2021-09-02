import React from 'react';
import Nav from "../Nav/Nav";
import Land from "../Land/Land";
import Footer from "../Footer/Footer";
import ChallengeSection from"../ChallengeSection/ChallengeSection";
import "./App.css";
import {SAMPLE_PARAGRAPHS} from "./../../Data/samplepara";

const TotalTime=120;
const APIurl = "http://metaphorpsum.com/paragraphs/1/12";
const defaultState={
    selectedParagraph: "",
    timeStarted: false,
    timeRemaining: TotalTime,
    words:0,
    character:0,
    wpm:0,
    testInfo:[],
    // totalLetter:0,
};
class App extends React.Component{  //class based component
    
    state=defaultState;
    fetchNewParagraphFallback=()=>{
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)

        ];
        const selectedParagraphArray =data.split("");
            const testInfo = selectedParagraphArray.map(selectedLetter=>{
            return {
                testLetter: selectedLetter,
                status: "notAttempted"

            };
            });
            // let totalLetter=data.length;
            this.setState({...defaultState,testInfo: testInfo, selectedParagraph:data});
        
        this.setState({timeRemaining: TotalTime});
    }
    fetchNewParagraph=()=>{
        fetch(APIurl).then(response=>response.text())
        .then(data=>{
            
            const selectedParagraphArray =data.split("");
            const testInfo = selectedParagraphArray.map(selectedLetter=>{
            return {
                testLetter: selectedLetter,
                status: "notAttempted"

            };
            });
            // let totalLetter=data.length;
            this.setState({...defaultState,testInfo: testInfo, selectedParagraph:data});
        });
        this.setState({timeRemaining: TotalTime});
    }

    componentDidMount(){
        
        this.fetchNewParagraphFallback();       
    }

    startTimer =()=>{
        this.setState({timeStarted:true});
        const timer =setInterval(()=>{
            if(this.state.timeRemaining>0){

            // Change the WPM and Time Remaining
            const timeSpent = TotalTime - this.state.timeRemaining;
            const wpm =
                timeSpent > 0
                    ? (this.state.words / timeSpent) * TotalTime
                    : 0;
            this.setState({
                timeRemaining: this.state.timeRemaining - 1,
                wpm: parseInt(wpm),
            });
        }else{
            clearInterval(timer)//stop the time inetrval from running
        }
        },1000)
    }

    startAgain =()=>this.fetchNewParagraphFallback();
    handleUserInput =(inputValue)=>{
        if(!this.state.timeStarted){

            this.startTimer();
        }

        // console.log(inputValue);

         /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */
        const character=inputValue.length;
        const words=inputValue.split(" ").filter((element)=>{return element.length!==0}).length;
        const index = character-1;
        if(index<0){
            this.setState({
                testInfo:[
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1),
                ],
                character,
                words,
            });
            return;
        }
        if(index>= this.state.selectedParagraph.length){
            this.setState({character,words,timeRemaining:0});
            return;
        }
        
        //Make a copy of testInfo
        const testInfo = this.state.testInfo;
        if(!(index===this.state.selectedParagraph.length-1)){
            testInfo[index+1].status="notAttempted";
        }
        //Check for the correct typed letter
        const isCorrect = inputValue[index]===testInfo[index].testLetter;
        //Update the test info
       testInfo[index].status = isCorrect?"correct":"incorrect"; 
       //Update the state
       this.setState({
           testInfo,
           character,
           words,
       })
    
    };

    render(){
        // fetch(APIurl).then((response)=>response.text())
        // .then((info)=>{
        //     console.log(info);
        // })
        // console.log("render method was called");
        return (
            <div className="app">

                {/* Nav Section*/}
                <Nav/>
                {/* Landing Page */}
                <Land/>
                {/* Challenge Section */}
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    character={this.state.character}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timeStarted={this.state.timeStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                {/* Footer */}
                <Footer/>

            </div>
        );
    }
}

export default App;
