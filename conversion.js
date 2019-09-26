const Conversion = (dnk)=> {
let rnk = '';
for(let i = 0; i<dnk.length; i++){
  if (dnk === " "){
    return " ";
  }
  else {
  switch (dnk[i]){
    case 'G':
    rnk += 'C';
    break;

    case 'C':
    rnk += 'G';
    break;

    case 'T':
    rnk += 'A';
    break;

    case 'A':
    rnk += 'U';
    break;

    default :
    rnk +=" ";
  }
  }
}
return rnk;
}
export default Conversion;
