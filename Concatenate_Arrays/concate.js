
// using Recursive
function getUnique(array){
  var uniqueArray = [];
  
  // Loop through array values
  for(i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}

// Using Filter 
function filterDuplicates(array) {
  return array.filter((value,index) => array.indexOf(value)===index);
}

// Using new Set

const concate = () => {

  const num1 = document.getElementById("concat-input-1").value.split("");
  const num2 = document.getElementById("concat-input-2").value.split("");

  let concateArr = num1.concat(num2).sort();
  let result = [];

  for (i = 0; i < concateArr.length; i++){
    // console.log(result.indexOf(concateArr[i]));
    if (result.indexOf(concateArr[i]) === -1) {
        result.push(concateArr[i]);
    }
  
  }

  // Using new set
  // result = [...new Set(concateArr)];
  
  document.getElementById("concate-output").innerHTML= `[${result.join(', ')}]`;
}