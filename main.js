function checkWords(){
    const words = [];
    const inputBox = document.getElementById("text").value;
    words.push(inputBox);
    console.log(words);
    const wordLength = words.map((word)=>{ 
          return word.length;
    }); 
    
    console.log("The numbers of character in the word is" + " " + wordLength);
    document.getElementById("output").textContent = 
    "The numbers of character in the word of" + " " + 
    inputBox + " " + "is" + " " + wordLength;
      
}