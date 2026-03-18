function removeVowels(str : string) : string{
    let vowels : string[] = ['a','e','i','o','u'];
    let value : number[] = [0,0,0,0,0,0];
    let result = "";

    for(var i=0;i<str.length;i++){
        if(vowels.includes(str.charAt(i))){
            let index = vowels.indexOf(str.charAt(i));
            value[index] += 1;
        }
    }  
    
    for(var i=0;i<str.length;i++){
        if(vowels.includes(str.charAt(i))){
            let index = vowels.indexOf(str.charAt(i));
            let val = value[index];

            if(val==1){
                result+=str.charAt(i);
            }
        }
        else{
            result+=str.charAt(i);
        }
    }

    return result;
}

console.log(removeVowels("correspondence"));