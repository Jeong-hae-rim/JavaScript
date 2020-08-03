
var pText = document.querySelector("#myText");
pText.addEventListener("click", function(){
    //글자 크기 20으로
    this.style.fontSize = "20px";
    //글자색 blue로
    this.style.color = "blue";
    //배경색 #ccc
    this.style.backgroundColor = "#ccc";
})