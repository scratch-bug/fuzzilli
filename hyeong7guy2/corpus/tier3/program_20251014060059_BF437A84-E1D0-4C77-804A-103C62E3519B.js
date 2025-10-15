function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            class C16 extends C15 {
                static [a5](a18, a19, a20) {
                }
            }
            const v21 = new C16();
            const v22 = class {
            }
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                const v27 = a26.constructor;
                new v27(this, a7, Uint16Array, v27);
            }
            new F23(v22, v21);
        }
        const v30 = new F8(f4, f4, a5, F0);
        return v30;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v33 = new F0(F0, F0);
new F0(v33, F0);
