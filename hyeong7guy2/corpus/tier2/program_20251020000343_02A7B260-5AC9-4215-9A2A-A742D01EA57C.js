function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = this[4];
            v14 ?? v14;
            const v17 = v14 | 7;
            const v18 = new F10();
            const v19 = new F10(F10, v17);
            try { v19.constructor(F10, 181, f6); } catch (e) {}
            function f22() {
                return f5;
            }
            Object.defineProperty(arguments, 0, { get: f22 });
            arguments[0];
            function F24(a26) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v27 = new F24(F10);
            function f28() {
                return F24;
            }
            function f29(a30) {
                return a30;
            }
            Object.defineProperty(v27, "length", { configurable: true, get: f28, set: f29 });
            let v31 = 30349n;
            ({"b":v31,"e":v8,...Int32Array} = v18);
            return v17;
        }
        f6(181);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v34 = new F1();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
