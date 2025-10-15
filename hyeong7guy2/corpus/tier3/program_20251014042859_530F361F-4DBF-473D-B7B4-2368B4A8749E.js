const v1 = %WasmArray();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4.values(v1);
}
new F2(Object);
