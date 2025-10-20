function f0(a1) {
    function f2() {
        const v4 = ("🙌🏿").constructor;
        ("🙌🏿").localeCompare(v4.fromCharCode(v4));
        return v4;
    }
    ({ construct: f2 }).construct();
    return a1;
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const v16 = new f0();
            v16.constructor(f13);
        }
        f14(f14);
        f14(this);
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v20 = new F9(F9, f0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
