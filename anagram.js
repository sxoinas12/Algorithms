function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length !== str2.length){
    return false;
  }

  if(str1 === '' && str2 === ''){
    return true;
  }
  var freq1 = {}; // key: value // key--> character // value times it appears
  var freq2 = {};
  for(let i =0; i<str1.length; i++){
      if(freq1[str1[i]]){
          freq1[str1[i]]++;
      }else{
          freq1[str1[i]] = 1;
      }
  }
  for(let i =0; i<str2.length; i++){
      if(freq2[str2[i]]){
          freq2[str2[i]]++;
      }else{
          freq2[str2[i]] = 1;
      }
  }
  var flag = false;
  for(var key in freq1){
    if(freq2.hasOwnProperty(key)){
      if(freq1[key] === freq2[key]){
        flag = true
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  return flag;
  
}

//Valid Anagram  Complexity --> O(n) 
validAnagram('','');