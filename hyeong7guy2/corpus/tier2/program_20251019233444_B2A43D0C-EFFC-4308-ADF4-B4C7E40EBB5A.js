function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function f9() {
            return a6;
        }
        function f10(a11, a12) {
            let v13 = -1098098658;
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F14();
            v13--;
            const v18 = v13 + 8;
            v18 % v18;
            eval(a11);
            return a11;
        }
        f9.constructor = f10;
        class C22 extends f9 {
        }
        C22.constructor(a6);
        return a6;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v25 = new F1();
const v26 = v25.constructor;
new v26(F1);
new F1(v26, F1);
