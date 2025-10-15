const v3 = new Map();
const v4 = v3.set();
function f5() {
    return v3;
}
const v7 = { construct: f5 };
v7.construct(f5, f5).set(v4).set(0);
function f11() {
    return f5;
}
const v12 = new Proxy(f11, v7);
const v13 = new v12();
v13.set(v12).set(WeakMap);
