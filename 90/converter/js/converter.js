
var source = document.querySelector("#s-value");
var target = document.querySelector("#t-value");

var sUnit = document.querySelector("#s-unit");
var tUnit = document.querySelector("#t-unit");
var CtoF = true;


function converter(){
    if(CtoF){
        target.value = (source.value * 1.8 + 32).toFixed(2);
    }
    else{
        target.value = ((source.value - 32) / 1.8).toFixed(2);
    }
}

function changeCtoF(){
    source.vale = "";
    target.value = "";

    if(CtoF){
        CtoF = false;
        sUnit.innerHTML = "&#8457;";
        tUnit.innerHTML = "&#8451;";
    }
    else{
        CtoF = true;
        sUnit.innerHTML = "&#8451;";
        tUnit.innerHTML = "&#8457;";
    }
}