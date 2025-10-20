function f2(a3) {
    let v4;
    try { v4 = a3.call(); } catch (e) {}
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(this, Symbol.hasInstance, { enumerable: true, value: Date });
        function f10() {
            function f11(a12) {
                class C13 extends F5 {
                }
                const v14 = new C13();
                for (let v15 = 0; v15 < 5; v15++) {
                    C13.__proto__ = v14;
                    v14 instanceof C13;
                }
                return v4;
            }
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v17 = new F5();
    v17.toString();
}
f2(f2);
