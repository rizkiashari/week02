function fiboSequence(num) {
  if (num < 2) {
    return num;
  }

  return fiboSequence(num - 1) + fiboSequence(num - 2);
}


const sequenceFibonacci = () => {
  const num = document.getElementById("fibo-input").value;
  let sequenceFibo = [];
  for (let i = 0; i < num; i++){
    sequenceFibo.push(`
      ${fiboSequence(i)}
    `)
  }

  document.getElementById("fibo-output").innerHTML = sequenceFibo.join(',');
}