const v0 = %WasmStruct();
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a3;
}
const v4 = new F1(v0);
function f5(a6) {
    return v0;
}
const v9 = [v4];
new Worker(f5, { arguments: v9, type: "function" });
