function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = %WasmArray();
            const v9 = [];
            v9[11] = Infinity;
            const v10 = v9[4];
            try { v8.valueOf = f5; } catch (e) {}
            try { v10.length = 536870889; } catch (e) {}
        }
        f6(f6);
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1(F1, Infinity);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
