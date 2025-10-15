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
            new F18(v17, C16, a6, C16);
        }
        new F8();
        return a3;
    }
    f4(this, a3, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
