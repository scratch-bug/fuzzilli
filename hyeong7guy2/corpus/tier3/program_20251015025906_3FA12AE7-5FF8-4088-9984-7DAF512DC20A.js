function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            class C16 extends Uint16Array {
            }
            class C17 extends C16 {
                constructor(a19, a20) {
                    for (let v21 = 0; v21 < 5; v21++) {
                        super.b >>>= -1;
                    }
                }
            }
            try { new C17(); } catch (e) {}
        }
        new F9(F0, a2, a6, a7);
        return a7;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0();
new F0(v25, F0);
new F0();
