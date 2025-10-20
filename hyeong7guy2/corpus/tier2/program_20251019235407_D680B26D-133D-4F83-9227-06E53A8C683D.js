function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7(F7, F7);
            const t8 = v11.constructor;
            new t8();
            let v14 = 30349n;
            const v15 = v14--;
            v15 > v15;
            const v18 = eval.bind;
            try { v18(); } catch (e) {}
            eval(v18);
        }
        f5(this);
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0(F0, F0);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
