function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v11 = new Int8Array(this);
            function f12(a13) {
                BigUint64Array.toString(a8, f1, v11);
                const t6 = "string";
                t6();
                return a7;
            }
            Object.defineProperty(v11, "valueOf", { configurable: true, enumerable: true, value: f12 });
            v11[8] = v11;
            return Int8Array;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v17 = new F5();
    class C18 {
        static [v17](a20, a21, a22) {
        }
    }
    return f1;
}
const v25 = { type: "function" };
const v26 = new Worker(f1, v25);
v26.getMessage(f1, v25, "function", v26, v26);
