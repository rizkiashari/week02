function pattern(){
  const input = document.getElementById("pattern").value;

  let pattern = '';

  for(i = 0; i < input; i++){
    for(j = 0; j <= i; j++){
      pattern += '*  ';
    }
    pattern += '<br/>';
  }
  document.getElementById("pattern-output").innerHTML = pattern;
}