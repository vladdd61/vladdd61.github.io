const apply = (quantity, func, arg) => {
   if (quantity === 0) {
     return arg;
   } 
   if (quantity < 0) {
     return "Not negative";
   }
   return apply (quantity-1, func, func(arg)); 
}
export default apply;
