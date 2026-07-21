let display = document.getElementById("display");
let buttonsDiv = document.getElementById("buttons");

// create buttons
function createButtons(mode) {
  buttonsDiv.innerHTML = "";

  let btns;

  if (mode === "hex") {
    btns = ["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9","0","+","-","*","/","=","C"];
  } else {
    btns = ["7","8","9","/","4","5","6","*","1","2","3","-","0","+","=","C"];
  }

  buttonsDiv.className = "buttons";

  btns.forEach(b => {
    let btn = document.createElement("button");
    btn.innerText = b;
    btn.onclick = () => press(b);
    buttonsDiv.appendChild(btn);
  });
}

// button click
function press(val) {
  if (val === "=") {
    calculate();
  } else if (val === "C") {
    display.value = "";
  } else {
    display.value += val;
  }
}

// calculate
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// switch mode
function switchMode() {
  let mode = document.getElementById("mode").value;
  display.value = "";
  createButtons(mode);
}

// 🌙☀️ DARK MODE WITH ICON CHANGE
function toggleDark() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️"; // dark mode → sun
  } else {
    btn.innerText = "🌙"; // light mode → moon
  }
}

// default load
createButtons("standard");