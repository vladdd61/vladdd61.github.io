const substr = (str, startingIndex = 0, lengthString = str.length) => {
    if (startingIndex < 0){
       startingIndex = 0;
    }
     if (startingIndex > str.length){
       return " " ;
    }
   if (lengthString < 0){
       lengthString = 1;
    } 
   if (lengthString > str.length) {
       lengthString = str.length;
    }
   if ((startingIndex + lengthString) > str.length){
      lengthString -= startingIndex;
    }
 let result = ""; 
  for (let i = startingIndex; i < startingIndex + lengthString ; i++){
  result += str[i];
    }
 return result;
} 
