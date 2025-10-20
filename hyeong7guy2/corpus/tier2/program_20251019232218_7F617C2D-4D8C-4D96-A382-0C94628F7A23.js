const v0 = [];
function f2(a3) {
    const v4 = a3++;
    function f5(a6) {
        function f7(a8, a9, a10) {
            return a9;
        }
        f7(a6, v4);
        return f7;
    }
    return f2;
}
const v12 = f2(536870888n);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        function f18(a19) {
            const v20 = f18[4];
            v0.forEach(v12);
            v20 | 7;
        }
        f18.call(F13);
        f18(F13);
        %OptimizeMaglevOnNextCall(f18);
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f17 });
}
const v26 = new F13();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
