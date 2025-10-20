function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        a5 ?? a5;
        a6 ?? a6;
        const v10 = a5 ?? a5;
        v10 ?? v10;
        function f12() {
            return a2;
        }
        function f13(a14, a15) {
            return this;
        }
        f12.constructor = f13;
        class C16 extends f12 {
        }
        eval(v10);
        let v19;
        try { v19 = C16.call(); } catch (e) {}
        v19 ?? v19;
        const v21 = C16.constructor;
        try { v21.toString(); } catch (e) {}
        const v23 = v21();
        try { v23(); } catch (e) {}
        const v25 = v23.isNaN(C16);
        return v25 && v25;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0(F0, F0);
const t31 = v28.constructor;
const v30 = new t31();
const v31 = v28.constructor;
const v32 = new v31();
const t35 = v32.constructor;
new t35(v31, v30, F0, v30);
