function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                class C18 {
                }
                class C19 extends C18 {
                }
                for (let i = 0; i < 5; i++) {
                    new C19();
                }
            }
            new F14(a2, this);
        }
        new F8(F0, a5, f4, F8);
        return F8;
    }
    f4(this, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v25 = new F0();
new F0(v25, v25);
