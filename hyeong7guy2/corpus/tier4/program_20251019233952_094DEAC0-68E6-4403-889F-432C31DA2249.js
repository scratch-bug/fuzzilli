const v1 = %WasmStruct();
function f2(a3, a4, a5) {
    function f6(a7, a8) {
        return a3;
    }
    a3[Symbol.toPrimitive] = f6;
    return v1;
}
try { f2(v1); } catch (e) {}
f2(16);
