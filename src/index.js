module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let strArr = str.split('');
  let arr = [];  
 
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
       if (arr[arr.length - 1] === bracketsConfig[j][0] && strArr[i] === bracketsConfig[j][1]) {
        arr.pop();
      } else if (strArr[i] === bracketsConfig[j][0]) {
        arr.push(strArr[i]);
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else return false;
}

