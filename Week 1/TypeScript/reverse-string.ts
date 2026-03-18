function reverseString(str : string) : string{
    let reverse : string = "";
    for(var i=str.length;i>=0;i--){
        reverse+=str.charAt(i);
    }
    return reverse;
}

console.log(reverseString("TypeScript"));

