function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            class C17 extends Uint16Array {
            }
            class C18 extends C17 {
                static 555140688 = 129;
                static [-1]() {
                }
            }
        }
        new F10();
        return -1;
    }
    f5(f5, f5, a3);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
