function range(start, end, skip) {
	var realStart = (end ? start : 0);
	var realSkip = (skip ? skip : 1);
	if(start <= end){
		for(var i = realStart; i<end; i+=realSkip){
		console.log(i);
		}
	}else{
		for(var i = realStart; i>end; i-=realSkip){
		console.log(i);
		}
	}
	
}