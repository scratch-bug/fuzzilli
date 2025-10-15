function f(a) {
  const x = a[0];
  new Array(a[1]);
  return x;
}

const a = [1.1, {}];

for (let i = 0; i < 20000; i++) {
  a[1] = 2;
  f(a);
}

a[1] = {
  [Symbol.toPrimitive]() {
    a[0] = 1;
    return 2;
  }
};

f(a);