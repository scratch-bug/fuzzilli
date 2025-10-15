function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F9(a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            0 instanceof F9;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v18 = new F14(a7, 0);
            const v19 = new F14(f6, 0);
            const t14 = v19.constructor;
            new t14();
            let v22 = 30349n;
            ({"b":v22,"e":v8,...Int32Array} = v18);
            return eval(a7);
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v27 = new F1(Int32Array, F1);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
