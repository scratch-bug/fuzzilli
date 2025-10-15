function g() {
  return arguments;
}

function f(b) {
  if (b) {
    return g(1);
  }
  return g(1, 2, 3);
}

for (let i = 0; i < 100000; ++i) {
  f(true);
}

const a = f(false);
a[2];