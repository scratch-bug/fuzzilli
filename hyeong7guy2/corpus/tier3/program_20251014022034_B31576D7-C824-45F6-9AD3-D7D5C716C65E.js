let v0 = -9n;
function f1(a2, a3, a4) {
    v0 %= v0;
    return a3;
}
new Worker(f1, { type: "function" });
