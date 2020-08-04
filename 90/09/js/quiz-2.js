
var r = document.querySelector("#radius");
var round = document.querySelector("#round");
var area = document.querySelector("#area");

//var calcRadious = document.querySelector("#start");

function calcR(){
    if(r.value != null && r.value != 0){
        round.value = (2 * Math.PI * Number(r.value)).toFixed(2);
        area.value = (Math.PI * Number(r.value) * Number(r.value)).toFixed(2);
    }
    else{
        alert("0 이상의 숫자를 입력해주세요.");
        r.value = "";
        r.focus();
    }
}

//calcRadious.addEventListener("click", function(){
//    if(r.value != null && r.value != 0){
//        round.value = 2 * Math.PI * Number(r.value);
//        area.value = Math.PI * Number(r.value) * Number(r.value);
//    }
//    else{
//        alert("0 이상의 숫자를 입력해주세요.");
//        r.value = "";
//        r.focus();
//    }
//})
