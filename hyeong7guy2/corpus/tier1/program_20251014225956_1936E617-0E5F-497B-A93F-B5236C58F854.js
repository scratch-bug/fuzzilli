function f0(a1) {
    return f0;
}
const v5 = new Proxy(Object, { __proto__: Object });
Object.defineProperty(v5, 3056, { enumerable: true, set: f0 });
