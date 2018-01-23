function century(year) {
	  if (year % 100 === 0) { return year / 100 }
	  else if (year < 100) {return 1}
	  else {return (year + 100 - (year % 100)) / 100}
}
