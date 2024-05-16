// w a p to find fixx e=when a number is divisble by 3
// /buzz when anumm is divisible by 5
// fizzbuzz when a num is dic=visible by 15

num=30

if(num%15==0){
    console.log(`the number ${num} is fizzbuzz`);
    // console.log(`the number ${num} is also buzz`);
    // console.log(`the number ${num} is also fizz`);
}
else if(num%3===0){
    console.log(`the number ${num} is fizz`)
}
else if(num%5===0){
    console.log(`the number ${num} is buzz`);
}
else{
    console.log(`num is not divisible by 3,5,15`);
}
