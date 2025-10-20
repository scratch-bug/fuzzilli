function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = [-1,1,9,-1918892703,59940824,-268435456,433,-51435,3];
        class C10 {
        }
        const t6 = this.DisposableStack;
        const v13 = new t6();
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            -v13;
            a20--;
        }
        const v23 = new F15(v9, -1, C10, -9007199254740992n);
        try { v23.constructor(a2, F0, C10, F0, -1); } catch (e) {}
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
