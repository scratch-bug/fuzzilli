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
                        eval();
                    }
                    const v28 = -9007199254740990 >> a16;
                    function f29(a30, a31, a32) {
                        return F14;
                    }
                    const t17 = v13.constructor;
                    t17(v28, a20);
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
        return f11;
    }
    return f11;
}
Object.defineProperty(Math, "valueOf", { configurable: true, enumerable: true, get: f10 });
Math / Math;
