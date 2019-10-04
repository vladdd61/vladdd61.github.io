const isPalindrom = str => {
if (str === null){
  return null;
}
str = String(str.replace(/\s/g, '')).toLocaleLowerCase();
let result = (str.length < 2) ? true : (str[0]==str[str.length-1]) ? isPalindrom(str.substr(1, str.length-2)) : "not a palindrom";
return result;
}
export default isPalindrom;
