import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes"
};

var emojisWeKnow = Object.keys(emojiDictionary);

// var username =prompt("what is your name?");

export default function App() {
  const [meaning, setMeaning] = useState(" ");
  const [userInput, setUserInput] = useState(" ");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "lightBlue" }}>
        This is - Emoji Interpreter App
      </h1>
      <h2 style={{ backgroundColor: "whiteSmoke" }}>
        This app will tell you the meaning of emojis
      </h2>

      <input onChange={emojiInputHandler}></input>

      <div> {meaning} </div>
      <h2>Emojis We Know </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
