//
//
//
let num=1221;
let rev=0;

while(num!=0){
    rev=rev*10+(num%10);
    num=Math.floor(num/10);
}
if(rev==num){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}
