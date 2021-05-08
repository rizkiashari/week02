
function removeArray() {
  const sentences = document.getElementById("sentences").value;

  const charRemove = document.getElementById("remove-char").value;
  
  let arr = [];
  
  arr = sentences.split("");
  

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === charRemove) {
      delete arr[i];
    }
  }
  
  document.getElementById("sentences-output").innerHTML = arr.join("<span> </span>");
}