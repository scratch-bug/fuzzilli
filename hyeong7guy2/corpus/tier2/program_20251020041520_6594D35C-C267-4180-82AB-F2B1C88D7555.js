function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    let v15 = -1098098658;
                    function F17(a19, a20) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v21 = new F17(a6, a2);
                    let v22 = 30349n;
                    gc();
                    ({"b":v22,"e":v15,...Int32Array} = v21);
                }
                f13(a2);
                f13();
                %OptimizeMaglevOnNextCall(f13);
                return f13;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v27 = new F8();
        class C28 {
            static [v27](a30, a31, a32) {
            }
        }
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0(F0, F0);
new F0();
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    new F0(a38, v34);
}
new F36();
