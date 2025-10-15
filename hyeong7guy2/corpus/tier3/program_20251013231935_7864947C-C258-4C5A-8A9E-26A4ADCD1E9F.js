function f1() {
    return "Aq";
}
function f3(a4) {
    return a4;
}
const v5 = {};
v5.defineProperty = f1;
function f7() {
    return f3;
}
const v8 = new Proxy(f7, v5);
v8[Int8Array] = f3;
