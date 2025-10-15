const v1 = class {
}
function f2() {
    return f2;
}
function f3(a4, a5, a6, a7) {
    f2.prototype = a6;
    return a4;
}
f3();
f3(v1, Uint8Array, f2);
