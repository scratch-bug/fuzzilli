try {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                const v8 = [];
                v8[11] = Infinity;
                const v9 = v8[4];
                try { v9.replaceAll(); } catch (e) {}
                const v11 = v9 ?? a3;
                return v11 ?? v11;
            }
            f6.call();
            %OptimizeMaglevOnNextCall(f6);
            return f6;
        }
        f5();
        Object.defineProperty(this, "toString", { get: f5 });
    }
    const v15 = new F1(Infinity, Infinity);
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
} catch(e21) {
}
