function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    a2.prototype = a2;
    a3--;
}
function f6() {
    return f6;
}
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        function f20() {
            function f21(a22) {
                function F23(a25, a26, a27, a28) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F23.call(); } catch (e) {}
                -9007199254740990 >> a18;
            }
            f21();
            f21();
            %OptimizeMaglevOnNextCall(f21);
            return f21;
        }
        Object.defineProperty(this, "toString", { get: f20 });
    }
    const v34 = new F16();
    class C35 {
        static [v34](a37, a38, a39) {
        }
    }
    for (let i41 = 0;
        (() => {
            const v44 = (20000).constructor.isSafeInteger(i41);
            function f45(a46, a47, a48) {
                class C49 {
                }
                C49.h = v44;
            }
            return i41 < 20000;
        })();
        ++i41) {
    }
}
new F8();
