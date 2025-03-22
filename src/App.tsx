import { useRef } from "react";
import "./App.css";
import { Clock } from "./component/Clock";

function App() {
  const para = useRef("");
  const len = useRef(0);
  const idx = useRef(0);
  const clock = useRef(false);
  const pragraph = [
    "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
    "He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.",
    "Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
    "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important.",
    "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
  ];
  function randomWord() {
    return Math.floor(Math.random() * pragraph.length);
  }
  const indx = randomWord();

  para.current = pragraph[indx];

  const arr: any = para.current.split("");
  function getChar() {
    console.log(idx.current);
    const char = arr[idx.current];
    return char;
  }

  function clockIsTrue() {
    clock.current = !clock.current;
    console.log(clock.current);
  }

  console.log(arr);
  return (
    <div>
      <div>{para.current}</div>
      <div>
        <textarea
          className="h-90 w-120 border-2"
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              if (idx.current > 0) {
                idx.current--;
                len.current--;
              }
              console.log(idx.current);
            }
          }}
          onChange={(e) => {
            if (e.target.value.length > len.current) {
              console.log(e.target.value.charAt(idx.current));
              len.current = e.target.value.length;
              const ch = getChar();
              if (e.target.value.charAt(idx.current) === ch) {
                console.log("correct");
              } else {
                console.log("wrong");
              }
              idx.current++;
            }
          }}
        ></textarea>
      </div>
      <div>
        <button className="btn" onClick={clockIsTrue}>
          Click start
        </button>
      </div>
      <Clock istrue={clock.current} />
    </div>
  );
}

export default App;
