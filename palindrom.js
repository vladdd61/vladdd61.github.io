const isPalindrom = str =>{
  str = String(str.replace(/\s/g, '')).toLocaleLowerCase();
  if (str.length < 2){
    return true;
  }
  else if (str[0]==str[str.length-1]){
    return isPalindrom(str.substr(1, str.length-2));
  }
  else {
    return "not a palindrom";
  }
}
export default isPalindrom;
