function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 {
                constructor(a17, a18) {
                    for (let i20 = 0; i20 < 10000; ++i20) {
                        super.b >>>= 4 / i20;
                    }
                }
            }
            new C15();
        }
        new F8();
        return F8;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
