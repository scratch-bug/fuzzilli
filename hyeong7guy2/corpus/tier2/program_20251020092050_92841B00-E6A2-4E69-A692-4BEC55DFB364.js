function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.d;
function f4() {
    function f5(a6, a7) {
        function f8(a9, a10, a11) {
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                const v20 = %WasmStruct();
                eval("");
                eval("");
                eval("");
            }
            const v24 = %WasmArray();
            new F12();
        }
        const v29 = new Worker(f8, { type: "function" });
        return v29;
    }
    f5();
    f5(f4);
    return F0;
}
f4();
f4.prototype;
const v34 = { construct: f4 };
