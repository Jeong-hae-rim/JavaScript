
var now = new Date();
var firstDay = new Date("2019-03-24");

var toNow = now.getTime();
var tofirst = firstDay.getTime();

var passedDay = Math.round((toNow - tofirst) / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerHTML = passedDay + "일";

calcDate(100);
calcDate(200);

function calcDate(days){

    var future = tofirst + days*(24*60*60*1000);
    var someDay = new Date(future);

    var year = someDay.getFullYear();
    var month = someDay.getMonth();
    var date = someDay.getDate();

    document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";

}
