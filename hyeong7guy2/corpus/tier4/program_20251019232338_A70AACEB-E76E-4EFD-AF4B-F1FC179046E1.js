function f1(a2) {
    function f4(a5, a6) {
        const v9 = {
            ...a6,
            get c() {
                const v8 = %WasmStruct();
                Object.defineProperty(v8, f4, { enumerable: true, value: 0 });
                return a2;
            },
        };
        return v9;
    }
    const v10 = f4(f4, f1);
    v10.e = v10;
    f4("symbol", v10);
    return 0;
}
try { f1(f1); } catch (e) {}
