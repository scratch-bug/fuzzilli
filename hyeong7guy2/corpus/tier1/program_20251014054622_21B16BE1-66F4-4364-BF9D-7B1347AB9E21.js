const v1 = new Map();
function f2() {
    return v1;
}
const v4 = { construct: f2 };
function f5() {
    return f5;
}
const v6 = new Proxy(f5, v4);
const v7 = new v6();
v7.set(v6);
