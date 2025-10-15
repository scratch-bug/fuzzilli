function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F7.a = F7;
            const v12 = (typeof F7).localeCompare(F0, this);
            v12 >>> v12;
            eval(a3);
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
v17.toString;
class C19 {
    static [v17](a21, a22, a23) {
    }
}
