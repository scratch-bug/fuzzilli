function f2() {
    return Float32Array;
}
const v3 = class extends Float32Array {
}
function f4(a5, a6) {
    a6(4096);
    return a5;
}
const v9 = new Promise(f4);
v9.then(v3, f2);
