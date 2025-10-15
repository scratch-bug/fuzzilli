for (let i1 = 10, i2 = 10; i2; i2--) {
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            const v15 = [693913.4712015034,-314050.5385797281];
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function f20() {
                    function f21(a22) {
                        const v24 = -639820461 * a18;
                        const v25 = v15.constructor;
                        for (let v26 = 0; v26 < 5; v26++) {
                        }
                        v25(v24, F16);
                    }
                    f21(this);
                    f21(a19);
                    %OptimizeMaglevOnNextCall(f21);
                    return f21;
                }
                Object.defineProperty(this, "toString", { get: f20 });
            }
            const v30 = new F16();
            class C31 {
                static [v30](a33, a34, a35) {
                }
            }
        }
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v36 = new F8();
class C37 {
    static [v36](a39, a40, a41) {
    }
}
