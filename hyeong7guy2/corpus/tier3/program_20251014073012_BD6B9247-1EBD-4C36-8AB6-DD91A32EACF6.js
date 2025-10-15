function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            class C16 extends C15 {
            }
            const v17 = class {
            }
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                a21.constructor;
            }
            new F18(v17, C16);
        }
        const v24 = new F8(a3, F8, f4, a6);
        return v24;
    }
    f4();
    %OptimizeFunctionOnNextCall(F0);
}
new F0(F0, F0);
new F0();
new F0();
