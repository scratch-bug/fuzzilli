function f2() {
    const v4 = [31215.68500756973,6.53257897060967];
    v4[15] |= 256;
    return v4;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.constructor = f2;
            const v17 = F12.constructor;
            const v18 = v17(v17, f10, v17, f10);
            const v19 = v18.unshift(211);
            const v20 = v18[15];
            const v21 = v20 ?? v20;
            function f22() {
                Symbol[this] = v20;
                return F12;
            }
            function f23(a24, a25, a26, a27) {
                function f28(a29, a30, a31) {
                    v21[3] **= a31;
                    const v36 = {
                        set a(a34) {
                            const t0 = {};
                            t0.g = v19;
                        },
                    };
                    return a7;
                }
                f28(a26, a24, v17);
                f28(v18);
                return a26;
            }
            return f10;
        }
        f10(f2);
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v41 = new F5(F5, 211);
v41.toString();
