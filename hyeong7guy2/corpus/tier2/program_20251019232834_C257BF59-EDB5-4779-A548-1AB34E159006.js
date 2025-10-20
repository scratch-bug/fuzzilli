function f1(a2) {
    try { a2.call(); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(this, Symbol.hasInstance, { enumerable: true, value: a7 });
        function f9() {
            function f10(a11) {
                class C12 extends F4 {
                }
                const v13 = new C12();
                for (let v14 = 0; v14 < 5; v14++) {
                    C12.__proto__ = v13;
                    v13 instanceof C12;
                }
                return C12;
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v16 = new F4(a2, F4);
    v16.toString();
    return Symbol;
}
f1(f1);
