function countUniqueVowels(str: string) : number{
    let vowels : string[] = ['a','e','i','o','u'];
    let frequency : number[] = [0,0,0,0,0]
    let count:number = 0;

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str.charAt(i))){
            let index : number = vowels.indexOf(str.charAt(i));
            frequency[index]+=1;
        }
        else{
            // no code
        }
    }

    for(var j=0;j<vowels.length;j++){
        if(frequency[j]==1){
            count+=1;
        }
    }

    return count;
 }

 console.log(countUniqueVowels("correspondence"));