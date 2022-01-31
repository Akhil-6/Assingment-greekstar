//Assignment -> 1

var input = prompt("enter number of input numbers you want to give");
var arr = [];
for(var i = 0;i<input;i++) {
	var num = prompt("enter a num" + (i+1));
	num = parseInt(num);
	arr.push(num);
}
console.log(arr)

//bubble sort

for(var i=0;i<=input-1;i++){
	var count = 0;
	for(var j=0;j<input-1;j++)
	{
		a=arr[j];
		b=arr[j+1]
		if(a<b)
		{
			arr[j]=b;
			arr[j+1]=a;
			count=count+1;
		}
	}
	console.log(arr);
	if(count==0){
		break;
	}
	
}
console.log(arr[0]);	
alert("maximum of given numbers is " + arr[0] );	

/* without sorting

var max = arr[0];
for(var i=1;i<input;i++) {
	if(max<=arr[i]) {
		max=arr[i];
	}
}
alert("maximum of given numbers is " + max );
console.log(max);
*/


		
