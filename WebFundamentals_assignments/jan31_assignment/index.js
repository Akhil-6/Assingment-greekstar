//Assigment -> 1

var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "Akhil",
            "marks": 86
        },
        {
            "name": "Amar",
            "marks": 75
        },
        {
            "name": "Vijay",
            "marks": 63
        },
        {
            "name": "Sandeep",
            "marks": 55
        },
        {
            "name": "Gourav",
            "marks": 40
        },
        {
            "name": "Srikanth",
            "marks": 67
        },
    ],
};
var arr = obj.students;
var user_input = prompt("enter a valid marks from 0 to 100");
user_input=parseInt(user_input)
var name_arr = [];
var j = 0
for(i=0;i<arr.length;i++){
	if(arr[i].marks >= user_input){
		name_arr[j] = arr[i];
		j=j+1
	}
}
if(j!=0){
	console.log("the students who got marks more than or equal to " + user_input + " are" );
	console.log(name_arr)}
else {
	console.log("none");
}