const substr = (str, start = 0, length = str.length) => {
    if (start < 0){
       start = 0;
    }
     if (start > str.length){
       return " " ;
    }
   if (length < 0){
       length = 1;
    } 
   if (length > str.length) {
       length = str.length;
    }
   if ((start + length) > str.length){
      length -= start;
    }
 let result = ""; 
  for (let i = start; i < start + length ; i++){
  result += str[i];
    }
 return result;
} 
