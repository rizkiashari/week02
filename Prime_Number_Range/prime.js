
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if( num % k === 0){
      return false;
    }
  }
  return true;
}


const prime = () => {
  
  const primeStart = document.getElementById("prime-start").value, primeEnd = document.getElementById("prime-end").value;
  let result = [];
  
  if (primeStart > primeEnd) {
    document.getElementById("prime-output").innerHTML= `${primeStart} lebih besar dari ${primeEnd} tidak sesuai dengan range, maka input ulang`;
  }
  else {
    for (let i = primeStart; i <= primeEnd; i++){
      if (i >= primeStart) {
         result.push(i);
      }
    }
    document.getElementById("prime-output").innerHTML = `Bilangan prima antara ${primeStart} dan ${primeEnd} adalah <br/> ${result.filter(isPrime)}`;
  }
  
}