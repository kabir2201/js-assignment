let pricePerTenGram = 376180;    // 10 gram 22 karat gold ki price
let tolaInGrams = 11.667;        // 1 tola kitne gram ka hota hai
let totalTola = 9;               // kitne tola gold hai
let zakatRate = 2.5;             // zakat rate percentage mein

let pricePerGram = pricePerTenGram / 10;        // 1 gram ki price nikalo
let totalGrams = totalTola * tolaInGrams;       // total gold gram mein
let totalValue = totalGrams * pricePerGram;     // total gold ki value
let zakat = (totalValue * zakatRate) / 100;     // zakat amount nikalo

console.log("Total Value: " + totalValue);
console.log("Zakat: " + zakat.toFixed(2));      // 2 decimal points tak round karo