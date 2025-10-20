let v0 = 256;
function f1() {
    v0 >>= v0;
    return v0;
}
new Worker(f1, { type: "function" });
