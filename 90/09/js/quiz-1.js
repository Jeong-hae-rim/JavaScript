
var check = document.querySelectorAll(".checkbx");

var sum = 24000;
for(var i = 0; i<check.length; i++){
    check[i].addEventListener("click", function(){
        if(this.checked == true){
            sum += parseInt(this.value);
        }
        else{
            sum -= parseInt(this.value);
        }
        document.querySelector("#total").value = sum;
    })
}
