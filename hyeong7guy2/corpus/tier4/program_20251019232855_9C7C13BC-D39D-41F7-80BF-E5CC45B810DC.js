class C1 {
}
const v2 = [2.220446049250313e-16];
const v3 = {};
v3.setPrototypeOf = Symbol;
const v5 = new Proxy(C1, v3);
v5.__proto__ = v2;
