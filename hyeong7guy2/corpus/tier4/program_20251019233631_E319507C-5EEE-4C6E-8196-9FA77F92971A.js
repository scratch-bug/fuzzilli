for (let i = 0; i < 5; i++) {
    const v0 = %WasmStruct();
    function f1(a2, a3, a4) {
        for (let v5 = 0; v5 < 5; v5++) {
            a2["p" + v5] = v5;
        }
        return f1;
    }
    try { f1(v0); } catch (e) {}
}
