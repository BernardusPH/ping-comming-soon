import PingLogo from "../../images/logo.svg"
import { useState } from "react";

function MainContent() {
const [emailInput,setEmailInput]=useState("");
const [errorMessage,setErrorMessage]=useState("")


    let emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
function handleSubmit(e){
    
    if(emailInput!==""){
       if(!(emailRegex.test(emailInput))){
        e.preventDefault();
        setErrorMessage(val=>val="Please provide a valid email address")
       }

    }else{
        e.preventDefault();
        setErrorMessage(val=>val="Email address cannot be empty")
    }
}

function handleInput(e){
    setEmailInput(e.target.value);
    setErrorMessage(val=>val="")
    e.target.className
}
    return (
        <div>
            <img src={PingLogo} alt="Logo" />

            <h1>We are launching <span>soon!</span></h1>

            <h2> Subscribe and get notified</h2>

            <form action="#" className="email-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input name="email"  type="text" id="email" className={"input-email " + (errorMessage!==""?"input-error":"") } placeholder="Your email address" onChange={handleInput} />
                    <p className="message">{errorMessage}</p>
                </div>
                <button type="submit" className="submit-btn">Notify Me</button>
            </form>

        </div>
    );
}

export default MainContent;