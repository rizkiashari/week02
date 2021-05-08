let vowelCheck = () => {
  const vowelChar = document.getElementById("vowel-input").value;

  let checkVowel = '';

  let toLowerVowels = vowelChar.toLowerCase();

  if (toLowerVowels.length > 1) {
    alert("error")
  }
  else {
    let isCheck = false;
    
    isCheck = toLowerVowels === 'a' || toLowerVowels === 'i' || toLowerVowels
    === 'e' || toLowerVowels === 'u' || toLowerVowels === 'o';
  
    if (isCheck) {
      checkVowel = toLowerVowels + ' adalah huruf vokal';
    }
    else {
      checkVowel = toLowerVowels + ' adalah bukan huruf vokal';
    }
    document.getElementById("vowel-output").innerHTML = checkVowel;
  }

  
 
}