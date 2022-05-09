let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1','2','3', '4','5', '6','7', '8','9', '.'];
const action = ['-', '+','X', '/', '%', 'x2'];
let percent = "%";

const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = '';
  b = '';
  sign='';
  finish = false;
  out.textContent = 0;
}



document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn'))return;
  if (event.target.classList.contains('ac'))return;
  out.textContent = '';
  const key = event.target.textContent;
  if (digit.includes(key)){
    if(b === '' && sign === ''){
       if (key === '.'){
        out.textContent = a;
        if (out.textContent.includes(".")) {
          out.textContent = a;
        }
        else{
          a+=key;
          out.textContent = a;
        }
       }
       else{
         a+=key;
         out.textContent = a;
       }
    }
    else if (a!=='' && b!=='' && finish) {
        b=key;
        out.textContent = b;
    }
    else {
      if (key === '.') {
        out.textContent = b;
        if (out.textContent.includes(".")) {
          out.textContent = b;
        }
        else{
          b+=key;
          out.textContent = b;
        }
      }
      else{
        b+=key;
        out.textContent = b;
      }
    }
    console.table(a,b,sign);
    return;
  }

  if (action.includes(key)){
    sign=key;
    if (a === ''&& b === '') {
      a+=key;
      out.textContent = a;
    }
    if (key === "x2") {
      a=a*a;
      out.textContent = a;
      return;
    }
    if (sign.length < 2){
      out.textContent = sign;
      return;
    }

    console.log(a,b,sign);
    return;
  }
  if (key === "=") {
    if (b==='') b=a;
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
        case "-":
          a = (a) - (b);
          break;
        case "X":
          a = (a) * (b);
          break;
        case "%":
          a = (b/100)*a;
          break;
        case "/":
          if (b==="0") {
          out.textContent = "Error"
          a='';
          b='';
          sign='';
          return;
          }
          a = a / b;
          break;
    }
    finish=true;
    out.textContent = a;
    console.table(a,b,sign);
  }

}
