var num1 = parseInt(prompt('비교할 첫 번째 숫자'));
var num2 = parseInt(prompt('비교할 두 번째 숫자'));

function compare(x, y){
    if(x>y){
        alert(x+"(이)가 "+y+"보다 큽니다.");
    }
    else if(x<y){
        alert(y+"(이)가 "+x+"보다 큽니다.");
    }
    else{
        alert(x+"와 "+y+"는 같습니다.");
    }
}

compare(num1, num2);