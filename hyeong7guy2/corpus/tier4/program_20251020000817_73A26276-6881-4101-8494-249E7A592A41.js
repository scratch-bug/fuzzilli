function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = /W(?:ab)+/dsymv;
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v14 = ~v9;
        let v15 = v14 << v14;
        v15++;
        const v17 = new F10(v14, v9);
        class C18 extends Uint8Array {
        }
        try { v17.toHex(C18, v15); } catch (e) {}
        return v9;
    }
    f4.call();
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0(F0, F0);
const v22 = v21.constructor;
const v23 = new v22(v22, v22, v22, F0);
new F0(v21, v23);
