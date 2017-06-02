function time(hour, minutes, period){
	if (period == "AM"){
		if (minutes >= 30){
			console.log("It's almost ", hour+1, " in the morning.");
		}else{
			console.log("It's just after ", hour, " in the morning.");
		}
	}else{
		if (minutes >= 30){
			console.log("It's almost ", hour+1, " in the evening.");
		}else{
			console.log("It's just after ", hour, " in the evening.");
		}
	}
}