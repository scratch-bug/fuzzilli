class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = delete C0.g;
            v8 || v8;
            const v10 = {};
            const v11 = f6[4];
            v11 ?? v11;
            const v14 = v11 | 7;
            let v15 = -1098098658;
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v21 = new F17(f6, C0);
            function F22() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v24 = new F22();
            const t21 = v24.constructor;
            new t21();
            for (let v27 = 0; v27 < 5; v27++) {
            }
            let v28 = 30349n;
            ({"b":v28,"e":v15,...Int32Array} = v21);
            return v14;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v31 = new F1();
class C32 {
    static [v31](a34, a35, a36) {
    }
}
