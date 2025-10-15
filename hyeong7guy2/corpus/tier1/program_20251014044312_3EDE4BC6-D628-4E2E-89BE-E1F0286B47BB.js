const v0 = %WasmArray();
function f1(a2, a3) {
    return v0;
}
const v6 = [v0];
new Worker(f1, { arguments: v6, type: "function" });
