var count = 0;
var comNum = Math.floor(Math.random()*100) + 1;

document.querySelector('#try').onkeypress = function(e) { 
    if (e.keycode == 13 || e.which == 13) {
        finding();  
        return false;
    }
}

function finding() {                                    
    var userNum = document.querySelector("#try").value;    
  
    if ( userNum >=1 && userNum <= 100)  {          
      if (comNum > userNum) {                           
        document.querySelector("#display").innerHTML = " UP!"; 
        document.querySelector("#try").value="";
        count++;
        document.querySelector("#counter").innerHTML = "시도 횟수 : " +  count + "회"; 
      }
      else if (comNum < userNum) {
        document.querySelector("#display").innerHTML = "DOWN!";
        document.querySelector("#try").value="";
        count++;
        document.querySelector("#counter").innerHTML = "시도 횟수 : " +  count + "회";  
      }
      else {
        document.querySelector("#display").innerHTML = "<span style='color:red'>맞혔습니다!</span>";
        count++;
        document.querySelector("#counter").innerHTML = "시도 횟수 : " +  count + "회, 끝!";
      }
    }
    else 
      alert("1과 100 사이의 숫자를 입력하세요.");
  }
