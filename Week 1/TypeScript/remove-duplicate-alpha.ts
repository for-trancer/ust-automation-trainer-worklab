function removeDuplicates(str: string) : string{
    
    let arr : string[] = [];
    let val : number[] = [];
    let result = "";

    let k=0;

    for(let i=0;i<str.length;i++){
        if(arr.includes(str.charAt(i))){
            let index = arr.indexOf(str.charAt(i));
            val[index] += 1; 
        }
        else{
            arr[k] = str.charAt(i);
            val[k++] = 1;
        }
    }

    for(let i=0;i<arr.length;i++){
        if(val[i]==1){
            result+=arr[i];
        }
    }

    return result;
}

console.log(removeDuplicates("correspondence"));