const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10();
            v14.constructor.prototype;
            let v17 = 30349n;
            const v19 = -9007199254740990 >> a3;
            v19 / v19;
            ({"b":v17,"e":v8,...Int32Array} = F10);
            const v22 = {};
            const t15 = v0.constructor;
            t15();
            const v25 = new ArrayBuffer();
            const v26 = v25.slice();
            v26.c = v26;
            const v28 = new Float32Array();
            const v29 = v28.slice();
            try { v29.indexOf(F1, -9007199254740990); } catch (e) {}
        }
        f6(F1);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v33 = new F1();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
