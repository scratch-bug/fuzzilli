function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9(a10, a11) {
            let v12 = -1098098658;
            v12--;
            let v14 = v12 << v12;
            v14--;
            eval();
            return a7;
        }
        f8.constructor = f9;
        class C18 extends f8 {
        }
        const t17 = C18.constructor;
        t17();
        return this;
    }
    f4(f4, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0(F0, F0);
const v23 = new F0(F0, v22);
new F0(v23, v23);
