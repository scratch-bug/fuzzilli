const v1 = %WasmArray();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    class C8 {
    }
    for (let i10 = (() => {
            Float64Array.valueOf = v1;
            return 0;
        })();
        i10 < 20000;
        ++i10) {
        C8.d *= i10;
    }
}
new F2(v1, Float64Array, F2, Float64Array);
