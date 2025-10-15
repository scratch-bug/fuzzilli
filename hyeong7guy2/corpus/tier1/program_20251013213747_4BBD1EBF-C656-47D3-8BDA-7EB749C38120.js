const v1 = {};
function f2() {
    return v1;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(v1, "p1", { configurable: true, enumerable: true, get: f2, set: f3 });
for (let i6 = 0; i6 < 20000; ++i6) {
    v1.p1 = 1e-15;
}
