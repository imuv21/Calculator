
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == 'c'){
      string = "";
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == 'r'){
      string = string.slice(0, -1);
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == '+'){
      string = eval(string)+e.target.innerHTML;
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == '-'){
      string = eval(string)+e.target.innerHTML;
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == '*'){
      string = eval(string)+e.target.innerHTML;
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == '/'){
      string = eval(string)+e.target.innerHTML;
      document.querySelector('.input').value = string;
    }else if(e.target.innerHTML == '%'){
      string = eval(string)+e.target.innerHTML;
      document.querySelector('.input').value = string;
     }else if(e.target.innerHTML == '!'){
      function factorialize(num) {
        if (num < 0) 
        return -1;
        else if (num == 0) 
        return 1;
        else {
        return (num * factorialize(num - 1));
        }
       }
      string = factorialize(string);
      document.querySelector('.input').value = string;
     }
    else{
      string = string + e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  })
})
