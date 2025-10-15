function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        a5.length;
        const v12 = {
            construct(a10, a11) {
                return a6;
            },
        };
        try { new Uint32Array(f4, a5, Uint32Array); } catch (e) {}
        class C15 extends Uint32Array {
        }
        C15.length = C15;
        const v16 = [-28740];
        class C17 {
        }
        return v16;
        function f18(a19, a20, a21, a22) {
            return f18;
        }
        const v24 = new Uint8ClampedArray();
        const v25 = v24.join();
        eval(a2);
        const v28 = {};
        const t23 = f18.constructor;
        t23(a2, v25);
        function F31(a33, a34, a35, a36) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return a2;
    }
    f4(this);
    %OptimizeFunctionOnNextCall(f4);
}
const v38 = new F0();
const v39 = new F0(v38, F0);
const v40 = v39.constructor;
new v40(v40, v40, v38);
