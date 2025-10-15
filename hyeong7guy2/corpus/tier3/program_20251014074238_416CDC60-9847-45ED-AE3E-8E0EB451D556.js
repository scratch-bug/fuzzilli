function f1() {
    return "function";
}
function f2() {
    [...f1] = "function";
    for (let v3 = 0; v3 < 50; v3++) {
    }
}
new Worker(f2, { type: "function" });
new Uint32Array(268435440);
