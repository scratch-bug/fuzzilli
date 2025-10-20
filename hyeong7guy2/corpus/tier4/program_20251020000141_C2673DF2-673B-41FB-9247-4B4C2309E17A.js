const v1 = new Int32Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        for (let i12 = 0, i13 = 10; i12 < i13;) {
            [i13,i12] = v1;
        }
        return this;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v20 = new F2();
const v21 = new F2(v20, v20);
const v22 = v21.constructor;
new v22(Int32Array, v1, Int32Array, v22);
