let first = document.querySelector('.first');
let second = document.querySelector('.second');
let btn = document.querySelector('.btn');
let select = document.getElementById('select');

 btn.addEventListener('click', function () {
    let res;
    switch (select.value) {
      case '+' :
        res = parseInt(+first.value + +second.value)        
        break;
      case '-' :
        res = parseInt(+first.value - +second.value)       
        break;
      case '*' :
        res = parseInt(+first.value * +second.value)       
        break;
      case '/' :
        res = parseInt(+first.value / +second.value)        
        break;
    }
   document.getElementById("result").innerHTML = res;
  })

