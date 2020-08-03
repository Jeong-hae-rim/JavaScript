var checks = document.querySelectorAll(".check");

for(var i = 0; i<checks.length; i++){
    checks[i].addEventListener("click", function(){
        if(this.parentNode.parentNode){
            this.parentNode.style.color = "#ccc";
        }
    })

    //buttons[i].addEventListener("click", function() {
			// 	this.parentNode.style.color = "#ccc";
			// });
}