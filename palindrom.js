const isPalindrom = str => {
if (str === null){
  return null;
}
str = String(str);
str = str.replace(/\s/g, '');
str = str.toLowerCase();
 if (str.length < 2){
    return true;
  }
  if (str[0]==str[str.length-1]){
    return isPalindrom(str.substr(1, str.length-2));
  }
    return "not a palindrom";
}
export default isPalindrom;
