let x = [2, 4, 6];
let y = [3, 7, 10];
let totalX = (totalY = Xy = r = xPow = yPow = 0);
n = x.length;

for (let i = 0; i < x.length; i++) {
  totalX = totalX + x[i];
}
console.log(totalX);

for (let j = 0; j < y.length; j++) {
  totalY = totalY + y[j];
}
console.log(totalY);

for (let i = 0; i < x.length; i++) {
  Xy += x[i] * y[i];
}
console.log(Xy);

a = n * Xy - totalX * totalY;
console.log(a);

for (let i = 0; i < x.length; i++) {
  xPow = xPow + x[i] ** 2;
}
console.log(xPow);

for (let j = 0; j < y.length; j++) {
  yPow = yPow + y[j] ** 2;
}
console.log(yPow);

b = (n * xPow - totalX ** 2) * (n * yPow - totalY ** 2);

console.log(b);

r = a / Math.sqrt(b);

console.log(r);
