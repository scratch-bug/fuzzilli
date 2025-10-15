function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = -(-3612);
            v8 / v8;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10(F0, F10);
            const t10 = v14.constructor;
            new t10();
            const v17 = new F10();
            v17.e;
            let v19 = 30349n;
            v19--;
            eval(a3);
        }
        f5(f5(F0));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
