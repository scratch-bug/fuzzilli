let v0 = -536870912;
function f1(a2) {
    v0++;
    return v0;
}
new Worker(f1, { type: "function" });
