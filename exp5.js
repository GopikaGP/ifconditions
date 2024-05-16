// to find the second largest among three number and arrange them in descending order?

num1 = 100;
num2 = 50;
num3 = 77;
var smallest;
var largest;
var secondLargest;

// largest
if(num1>=num2 && num1>=num3){   
     largest=num1;
 }
 else if(num2>=num1 && num2>=num3){
    largest=num2;
 }
 else{
    largest=num3;
 }
//smallest
if(num1<=num2 && num1<=num3){
    smallest=num1;
}
else if(num2<=num1 && num2<=num3){
   smallest=num2;
}
else{
   smallest=num3
}

// second largest 
if((num1>=num2 && num1<=num3)|| (num1<=num2 && num1>=num3)){
    secondLargest=num1
}
else if((num2>=num1 && num2<=num3)|| (num2<=num1 && num2>=num3)){
    secondLargest=num2
}else
{
    secondLargest=num3
}
console.log("The second Largest number",secondLargest);
console.log("the descending order of the number is",smallest,secondLargest,largest)
