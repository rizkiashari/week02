
const pascalTriangle = () => {

  const lines = document.getElementById("pascal").value;

  let pattern = [];

  for(let row=0;row < lines; row++){
    for(let a = lines; a > row; a--){
          pattern.push("&nbsp; &nbsp;");
    }
    let value = 1;
    for(let col = 0;col <= row;col++){
      pattern.push(`${value} &nbsp;`);
      value = value * (row-col)/(col+1);
    }
    pattern.push("<br>");
  }
  document.getElementById("pascal-output").innerHTML = pattern.join("");
  
}


