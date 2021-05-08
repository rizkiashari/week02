const multiplication = () => {
  const multiInput = document.getElementById("multi_tab").value;
  let result = 0;
  let multiArr = [];
  let i;
  for(i = 1; i <=10; i++){
  
    multiArr.push(`
     <p> ${multiInput} * ${i} = ${result = multiInput * i}</p>
    `)
  }

  document.getElementById("multi-output").innerHTML = multiArr.join('');
}