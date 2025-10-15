const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10(Int32Array, v0);
            v14.constructor.prototype;
            let v17 = 30349n;
            const v19 = -9007199254740990 >> a3;
            v19 / v19;
            ({"b":v17,"e":v8,...Int32Array} = F10);
            const v22 = {};
            const t15 = v0.constructor;
            t15();
            const v25 = new ArrayBuffer();
            const t19 = v25.slice(-9007199254740990, -9007199254740990);
            t19.c = a4;
            const v28 = new Float32Array(v0, a3, a4);
            function f29(a30) {
                return this;
            }
            v28.constructor = f29;
            const v31 = v28.slice();
            try { v31.indexOf(); } catch (e) {}
            return v8;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v35 = new F1();
class C36 {
    static [v35](a38, a39, a40) {
    }
}
