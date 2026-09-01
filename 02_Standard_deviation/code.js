var sd = ave = n = a = b = i  = 0;
var x = [];

n = Number(prompt("How many Items ?"))



for (var i = 0; i < n; i++) {
    x[i] = Number(prompt("give me items x[" + i + "]"))
    ave = ave + x[i]
}

ave  = ave / n
console.log(ave);

for (var j = 0; j < n; j++) {
    a +=  Math.pow(x[j] - ave,2)    
}

b = a / n

sd = Math.sqrt(b)

console.log(sd);
