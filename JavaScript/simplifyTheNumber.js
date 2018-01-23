function simplify(number){
	  var ans = []
	  var string = ''
	  if (number > 1000000) {
		      var millions = Math.floor(number / 1000000)
		        if (millions > 0) {string += millions+'*1000000+'}
		      number = number - (millions*1000000)}
	  if (number > 100000) {
		      var hunThous = Math.floor(number / 100000)
		        if (hunThous > 0) {string += hunThous+'*100000+'}
		      number = number - (hunThous*100000) }
	  if (number > 10000) {
		      var tenThous = Math.floor(number / 10000)
		        if (tenThous > 0) {string += tenThous+'*10000+'}
		      number = number - (tenThous*10000) }
	  if (number > 1000) {
		      var thous = Math.floor(number / 1000)
		        if (thous > 0) {string += thous+'*1000+'}
		      number = number - (thous*1000) }
	  if (number > 100) { 
		      var hund = Math.floor(number / 100)
		        if (hund > 0) {string += hund+'*100+'}
		      number = number - (hund*100) }
	  if (number >= 10) {
		      var tens = Math.floor(number / 10)
		        if (tens > 0) {string += tens+'*10+'}
		      number = number - (tens*10) }
	  if (number > 0) {
		      var units = number
		        if (units > 0) {string += units}
		      }
	  if (string.slice(-1) === '+') { return string.slice(0,-1) }
	  else { return string }
}
