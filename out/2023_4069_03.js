function f(c) {
  return new c();
}

class A {
  constructor() {
    this.p0 = 1.1;
  }
}

class B extends A {
  constructor() {
    super();
    this.p1 = {};
  }
}

for (let i = 0; i < 20000; i++) {
  f(A);
}

f(B);