const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10(Int32Array, f5);
            const t10 = v14.constructor;
            new t10();
            v14.constructor.prototype;
            let v19 = 30349n;
            const v21 = -9007199254740990 >> a3;
            v21 / v21;
            ({"b":v19,"e":v8,...Int32Array} = F10);
            const v24 = {};
            const t17 = v0.constructor;
            const v26 = t17();
            try { v26(); } catch (e) {}
            const v28 = new ArrayBuffer(v8);
            const v29 = v28.slice();
            v29.c = v29;
            const v31 = new Float32Array();
            const v32 = v31.slice();
            let v33;
            try { v33 = v32.indexOf(); } catch (e) {}
            return v33 + v33;
        }
        f6();
        f6(this);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v37 = new F1();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
