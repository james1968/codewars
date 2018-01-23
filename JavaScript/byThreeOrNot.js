function divisibleByThree(str){
	  var arr = str.split('').map(function(item) { return parseInt(item, 10);})
	  if ((arr.reduce((a, b) => a + b, 0)) % 3 === 0) { return true }
	  else  { return false }
}
