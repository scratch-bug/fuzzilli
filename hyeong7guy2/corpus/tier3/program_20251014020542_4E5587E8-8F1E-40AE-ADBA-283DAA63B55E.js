function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C9 extends Uint32Array {
        }
        [null,C9,null];
        return Uint32Array;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
new F0(v13, v13);
new F0();
