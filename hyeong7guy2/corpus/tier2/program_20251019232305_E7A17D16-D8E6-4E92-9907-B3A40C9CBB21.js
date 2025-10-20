for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f10() {
    function f11(a12) {
        const v13 = [f10,f10];
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                function f19(a20) {
                    function F21(a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        eval(a24);
                    }
                    const v27 = v13[4];
                    v27 ?? v27;
                    let v29 = -9007199254740990;
                    v29--;
                    const v31 = v29 >> a16;
                    const t18 = v13.constructor;
                    const v33 = t18(v31, a20);
                    try { v33.toSorted(); } catch (e) {}
                }
                %OptimizeMaglevOnNextCall(f19);
                return f19;
            }
            Object.defineProperty(this, "toString", { get: f18 });
        }
        const v35 = new F14();
        class C36 {
            static [v35](a38, a39, a40) {
            }
        }
        return f10;
    }
    return f11;
}
Object.defineProperty(Math, "valueOf", { configurable: true, enumerable: true, get: f10 });
Math / Math;
