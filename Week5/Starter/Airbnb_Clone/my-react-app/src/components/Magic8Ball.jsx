import { useState } from "react";

function Magic8Ball() {
    const responses = [
        "Yes, definitely",
        "Ask again later",
        "Cannot predict now",
        "My sources say no",
        "Outlook good",
        "Very doubtful",
    ];
    const [phrase, setPhrase] = useState("");
    return (
        <div className="Magic8Ball">
            <button>Ask the Magic 8 Ball</button>
            <p></p>
        </div>
    );
}

export default Magic8Ball;