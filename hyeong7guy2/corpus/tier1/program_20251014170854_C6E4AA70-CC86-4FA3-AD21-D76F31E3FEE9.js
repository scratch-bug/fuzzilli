const v3 = new Map();
const v4 = v3.set();
function f5() {
    return v3;
}
const v7 = { construct: f5 };
const v8 = v7.construct();
v8.set(v4);
function f10() {
    return Map;
}
const v11 = new Proxy(f10, v7);
const v12 = new v11(v11, v3, v11, Map, v8);
v12.set(v11).set(WeakMap).set(false);
