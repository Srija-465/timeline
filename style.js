let twenty = document.getElementById("twentySecondsBtn");
let thirty = document.getElementById("thirtySecondsBtn");
let forty = document.getElementById("fortySecondsBtn");
let one = document.getElementById("oneMinuteBtn");
let para = document.getElementById("timerText");
let uniqueid = null;
twenty.onclick = function() {
    clearInterval(uniqueid);
    let counter = 20;
    para.textContent = counter + " seconds left";
    uniqueid = setInterval(function() {
        counter = counter - 1;
        para.textContent = counter + " seconds left";
        if (counter === 0) {
            para.textContent = "Your moment is complete";
            clearInterval(uniqueid);
        }
    }, 1000);
}

thirty.onclick = function() {
    clearInterval(uniqueid);
    let counter = 30;
    para.textContent = counter + " seconds left";
    uniqueid = setInterval(function() {
        counter = counter - 1;
        para.textContent = counter + " seconds left";
        if (counter === 0) {
            para.textContent = "Your moment is complete";
            clearInterval(uniqueid);
        }
    }, 1000)

}
forty.onclick = function() {
    clearInterval(uniqueid);
    let counter = 40;
    para.textContent = counter + " seconds left";
    uniqueid = setInterval(function() {
        counter = counter - 1;
        para.textContent = counter + " seconds left";
        if (counter === 0) {
            para.textContent = "Your moment is complete";
            clearInterval(uniqueid);
        }
    }, 1000);

}

one.onclick = function() {
    clearInterval(uniqueid);
    let counter = 60;
    para.textContent = counter + " seconds left";
    uniqueid = setInterval(function() {
        counter = counter - 1;
        para.textContent = counter + " seconds left";
        if (counter === 0) {
            para.textContent = "Your moment is complete";
            clearInterval(uniqueid);
        }
    }, 1000);

}