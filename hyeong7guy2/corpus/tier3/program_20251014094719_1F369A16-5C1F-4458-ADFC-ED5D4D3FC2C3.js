function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Symbol.dispose;
        const v11 = {
            [v9]() {
            },
        };
        for (let i = 0; i < 5; i++) {
        }
        using v12 = v11;
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            class C20 extends Uint16Array {
            }
            C20.d = C20;
        }
        new F13(this, this, a5, F0);
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
