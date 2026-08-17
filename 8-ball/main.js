const rowWidth = 350;
const rowHeight = 105;

const singleWidth = 100;
const singleHeight = 135;

const rows = ["A", "E"];
const singles = ["B", "C", "D"];

let answers = [
  "ASK AGAIN LATER",
  "YES",
  "MY SOURCES SAY NO",
  "YOU MAY RELY ON IT",
  "YES DEFINITELY",
  "VERY DOUBTFUL",
  "SIGNS POINT TO YES",
  "BETTER NOT TELL YOU NOW",
  "CANNOT PREDICT RIGHT NOW",
  "WITHOUT A DOUBT",
  "MY REPLY IS NO",
  "IT IS DECIDEDLY SO",
  "IT IS CERTAIN",
  "CONCENTRATE AND ASK AGAIN",
  "DON'T COUNT ON IT",
  "AS I SEE it YES",
  "MOST LIKELY",
  "OUTLOOK GOOD",
  "REPLY HAZY TRY AGAIN",
  "OUTLOOK NOT SO GOOD",
];
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function setSizes(list, width, height) {
  list.forEach((id) => {
    let e = document.getElementById(id);
    e.width = width;
    e.height = height;
  });
}

// delay execution of code in ms
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let c = document.getElementById("C");
let b = document.getElementById("B");

let num = randomInt(20) + 1;
c.src = "images/answers/c" + num.toString() + ".gif";

setSizes(singles, singleWidth, singleHeight);
setSizes(rows, rowWidth, rowHeight);

b.width -= 2;
c.width += 51;
const speak =  async () => {
  await delay(4000)
  const utterance = new SpeechSynthesisUtterance(answers[num - 1]);
  window.speechSynthesis.speak(utterance);
}
console.log(answers[num - 1]);

speak();
