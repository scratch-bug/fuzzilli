Symbol.iterator;
function f3() {
}
f3();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
const v41 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
const v42 = new Uint8Array(v41);
const t9 = WebAssembly.Module;
new t9(v42);
const v46 = %WasmArray();
class C49 {
}
for (const v50 in v41) {
}
let v51 = false;
function f52(a53) {
    if (!a53) {
        return;
    }
    function f55() {
    }
    WebAssembly.instantiateStreaming().catch(f55);
}
for (let i59 = 0; i59 < 25000; i59++) {
    if (i59 === 24999) {
        v51 = true;
    }
    f52(v51);
}
class C69 {
}
