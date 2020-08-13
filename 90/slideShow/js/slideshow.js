var imglist = document.querySelectorAll("img");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");

var current = 0;
slideShow(current);
prevBtn.onclick = prevImg;
nextBtn.onclick = nextImg;

function slideShow(n){
    for(var i = 0; i<imglist.length; i++){
        imglist[i].style.display = "none";
    }
    imglist[n].style.display = "block";
}

function prevImg(){
    if(current > 0){
        current -= 1;
        prevBtn.innerHTML = "&lang; </br> Pre"
    }else{
        current = imglist.length - 1;
        prevBtn.innerHTML = "&lang; </br> Pre"    
    }
    slideShow(current);
}

function nextImg(){
    if(current == imglist.length -1){
        current = 0;
        nextBtn.innerHTML = "&rang; </br> Next"
    }
    else{
        current += 1;
        nextBtn.innerHTML = "&rang; </br> Next"
    }
    slideShow(current);
}