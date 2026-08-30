let a = 1;
let b = 2;

console.log(a);
console.log(b);

for (let i = 1; i <= 4; i++) {
  let next = a + b; 
  console.log(next);

  a = b;
  b = next;
}