//Assignment -> 1 give count of vowels in a number

var name = prompt("enter your name");
if(isNaN(name)){
	var arr = name.split("");
	console.log(arr)
	var count = 0;
	for(var i =0;i<arr.length;i++){
		switch(arr[i]){
			case 'e':
			case 'E':
				count=count+1;
				break;
			case 'a':
			case 'A':
				count=count+1;
				break;
			case 'i':
			case 'I':
				count=count+1;
				break;
			case 'o':
			case 'O':
				count=count+1;
				break;
			case 'u':
			case 'U':
				count=count+1;
				break;
		}
	}
	console.log("Number of vowels in your name is " + count);
	alert("Number of vowels in your name are " + count);
}
else {
	console.log("enter a valid name");
	alert("enter a valid name");
}

//Assignment -> 2 check given number is prime num or not


var num = prompt("enter a num");
num = parseInt(num);

var sum = 0;
for(var i=1;i<=num/2;i++){
	if(num%i==0){
		sum=sum+i;
	}
}
if(isNaN(num))
	alert("enter a valid number");
else if (sum==1){
	console.log(num + " is prime");
	alert(num + "is prime");}
else {
	console.log(num + " is not aprime");
	alert(num + " is not a prime");
}
