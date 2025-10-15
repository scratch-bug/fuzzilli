function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v7 = new F3(F0, F0);
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            function f13(a14) {
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v19 = v7++;
                    v19 >> v19;
                }
                const v21 = new F15(a10, F15);
                const t16 = v21.constructor;
                const v23 = new t16();
                v23.constructor;
                gc();
            }
            f13(this);
            f13(F3);
            %OptimizeMaglevOnNextCall(f13);
            return f13;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v29 = new F8();
    class C30 {
        static [v29](a32, a33, a34) {
        }
    }
}
new F0();
