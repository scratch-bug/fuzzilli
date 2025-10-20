function f0(a1, a2, a3) {
    for (let v5 = 0; v5 < 25; v5++) {
        const v10 = {
            toString(a7, a8, a9) {
                return a9;
            },
        };
    }
    const t8 = 109;
    const v12 = t8(a2, a1, a2, 0);
    const t10 = (0).Module;
    t10(v12);
    const v16 = { ...arguments };
    class C17 {
    }
    const v18 = %WasmStruct();
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F19(v18, F19);
    return a1;
}
const v27 = new Worker(f0, { type: "function" });
v27.getMessage();
