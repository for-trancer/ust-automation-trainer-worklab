function getWeight(w : number,h : number) : string {
    var bmi : number  = w/(h*h);
    console.log(bmi);
    if(bmi<18.5){
        return 'Under Weight';
    }
    else if(bmi >= 18.5 && bmi < 25)
    {
        return 'Normal';
    }
    else if(bmi >= 25 && bmi < 30){
        return 'Over Weight';
    }
    else if(bmi > 30){
        return 'Obesity';
    }
    else{
        return 'Invalid BMI';
    }
}

console.log(getWeight(55,1.69));