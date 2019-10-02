const substr = (str, a = 0, b = str.length) => {
     if ( a > str.length){
      return  " ";
    }

    if (a < 0){
       a = 0;
    }
     if (a > str.length){
       a = " ";
    }
   if (b < 0){
       b = 1;
    } 
   if (b > str.length) {
       b = str.length;
    }
   if ((a + b) > str.length){
      b -= a;
    }
 let result = ""; 
  for (let i = a; i < a + b ; i++){
  result += str[i];
    }
 return result;
} 
