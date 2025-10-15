function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C9 extends Uint32Array {
        }
        ([null,C9,null]).pop();
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v14 = new F0();
new F0(v14, F0);
new F0();
