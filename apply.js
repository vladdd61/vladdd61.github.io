const apply = (q, f, arg) => {
   if (q === 0) {
     return arg;
   } 
   if (q < 0) {
     return "Not negative";
   }
   return apply (q-1, f, f(arg)); 
}
export default apply;
