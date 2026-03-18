function checkTime(time : string) : string{
    var temp = time.split(':');
    var hour : number = Number(temp[0]);
    var minute : number = Number(temp[1]);

    if(hour == 9 && minute == 30){
        return 'ON TIME';
    }
    else if(hour >= 9 && minute > 30){
        return 'LATE';
    }
    else if(hour <= 9 && minute < 30 ){
        return 'EARLY';
    }
    else if(hour < 0){
        return 'Invalid Hour';
    }
    else if(hour > 24){
        return 'Invalid Hour';
    }
    else{
        return 'Invalid';
    }

}

console.log(checkTime("9:29"));