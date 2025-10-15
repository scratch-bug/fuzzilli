function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
            }
            function f21(a22) {
            }
            Object.defineProperty(this, "e", { get: f20, set: f21 });
        }
        new F14(f10);
        const v26 = [-11];
        function F27(a29, a30, a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = this;
            a31.g = f10;
            a31.g = a31;
            this.f = a32;
        }
        const v33 = new F27(Int8Array, 1825, F27);
        v33.g = v5;
        const t26 = v33.constructor;
        const v35 = new t26(v33, v26, v33);
        v35.hasOwnProperty(v33, a8, v35);
        return this;
    }
    f10();
    %OptimizeFunctionOnNextCall(f10);
}
const v38 = new F6(F6, v5);
new F6(v5, v38);
new F6(F0, v38);
