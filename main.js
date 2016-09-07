// Setup
var myMainigais = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
//Checks object for a property and returns something.
function checkObj(checkProp){
  if (myObj.hasOwnProperty(checkProp)){
    return myMainigais[checkProp];
  }else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("house");
