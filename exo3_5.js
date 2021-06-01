var index=1;

function changeImage(arg) {
	if (arg=='left') {
		index--;
		if (index==0) {
			index=14;
			index--;
		}
	}if (arg=='right') {
		index++;
		if (index==14) {
			index=1;
			index++;
		}
	}
	
	var chemin="images/foto"+index+".jpg";
	document.getElementById('image').src=chemin;
}
		
		/*if (index=14) {
			index--;
		}     if (arg=='right') {
		index++;
		if (index==14) {
			index=1;
			index++;
		}
	} */