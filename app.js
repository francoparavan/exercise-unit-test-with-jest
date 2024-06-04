const sum = (a,b)=> {
    return a+b;
}
console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(montoDol){
    let dollarValueInYen = montoDol / 1.07;
    return dollarValueInYen * 156.5;
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let EuroValueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return EuroValueInDollar;
}
const fromYenToPound = function(montoYen){
    let yenValueInPound = montoYen / 156.5;
    return yenValueInPound * 0.87;
}
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound, sum};