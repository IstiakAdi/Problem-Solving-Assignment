//feetToMile

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}
var mileResult = feetToMile(50);
console.log(mileResult);


//woodCalculator

function woodCalculator(chair, table, bed){
    var chairQuantity = chair * 5;
    var tabeleQuantity = table *3;
    var bedQuantity = bed *8;
    var TotalWood = chairQuantity + tabeleQuantity + bedQuantity;

     return TotalWood ;
}
var woodResult  = woodCalculator(10, 20, 30);
console.log(woodResult);


//tinyFriend

function tinyFriend (names){
    var shortest = names[0];
    for( var i =0; i <names.length; i++){
        var presentName = names[i];
        if(presentName.length < shortest.length){
            shortest = presentName;
        }
    }
    return shortest;
}
var shortestName = tinyFriend(["rubel","firoz", "habib","zen"]);
console.log(shortestName);

