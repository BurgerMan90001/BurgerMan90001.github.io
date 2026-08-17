const rowWidth = 350;
const rowHeight = 105;

const singleWidth = 100;
const singleHeight = 135;

const rows = ["A", "E"];
const singles = ["B", "C", "D"];
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

let c = document.getElementById("C");
let b = document.getElementById("B");

c.src = "images/answers/c" + (randomInt(20) + 1).toString() + ".gif";

setSizes(singles, singleWidth, singleHeight);
setSizes(rows, rowWidth, rowHeight);

b.width -= 2;
c.width += 51;

// window.addEventListener("load", function () {});
