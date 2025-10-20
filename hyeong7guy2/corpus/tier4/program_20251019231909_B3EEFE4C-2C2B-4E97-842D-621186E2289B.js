const v0 = [];
function f1() {
    return SharedArrayBuffer;
}
v0.toString = f1;
WeakMap.value = v0;
const v5 = WebAssembly.Global;
try { new v5(WeakMap); } catch (e) {}
