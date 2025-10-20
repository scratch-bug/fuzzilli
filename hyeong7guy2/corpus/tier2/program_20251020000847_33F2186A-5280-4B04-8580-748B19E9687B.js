try {
    function f0(a1) {
        function f3() {
            return 750;
        }
        try { f3.valueOf = f3; } catch (e) {}
        class C4 extends f3 {
        }
        function f5() {
            return C4;
        }
        Object.defineProperty(f5, "initial", { value: C4 });
        const v7 = WebAssembly?.Memory;
        try { new v7(f5); } catch (e) {}
        for (let v9 = 0; v9 < 250; v9++) {
        }
        return 750;
    }
    new Worker(f0, { type: "function" });
    function f14() {
        return f14;
    }
    new Worker(f14, { type: "function" });
} catch(e18) {
}
