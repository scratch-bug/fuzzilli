function f(ctor) {
  return new ctor();
}

class A {
  constructor() {
    this.p0 = 1.1;
    if (new.target !== A) {
      this.p1 = {};
    }
  }
}

class B extends A {}

for (let i = 0; i < 20000; i++) {
  f(A);
}

f(B);