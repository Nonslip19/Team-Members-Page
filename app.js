var switchBtn = document.getElementById("switch");
var body = document.getElementById("body");


switchBtn.addEventListener("click", ()=>{
    var backColor = body.style.backgroundColor;
    if (backColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
    else{
        body.style.backgroundColor = "black";
        body.style.color = "white"

    }


})