function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a5;
        }
        function f9(a10, a11) {
            let v12 = -1098098658;
            v12--;
            const v14 = v12 + v12;
            let v15 = v14 % v14;
            v15--;
            return eval(a3);
        }
        f8.constructor = f9;
        class C19 extends f8 {
        }
        C19.constructor(a3, C19);
        return C19;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = new F0();
const v24 = v23.constructor;
new v24(v23, v24, v22, v22);
