function f1(a2) {
    try { a2(); } catch (e) {}
    function f5(a6, a7) {
        const v10 = {
            ...a7,
            get c() {
                const v9 = %WasmStruct();
                Object.defineProperty(v9, f5, { enumerable: true, value: 0 });
                return 0;
            },
        };
        return v10;
    }
    return f5("symbol", f5());
}
try { f1(f1); } catch (e) {}
