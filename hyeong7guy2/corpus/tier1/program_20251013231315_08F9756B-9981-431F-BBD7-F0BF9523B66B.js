function f0() {
    return f0;
}
function f1() {
    return f1;
}
f0[Symbol.__proto__] = f1;
