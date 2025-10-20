function f0() {
    return f0;
}
function f1() {
    class C3 extends Float32Array {
    }
    return C3;
}
Object.defineProperty(f0, "toString", { value: f1 });
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
F4.element = f0;
const v7 = WebAssembly.Table;
try { new v7(F4); } catch (e) {}
