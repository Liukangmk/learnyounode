let a = process.argv;
let sum = 0;
for (let b = 2; b < a.length; b++) {
    sum += Number(a[b]);
}
console.log(sum);