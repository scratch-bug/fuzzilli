function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function f20() {
                    return a16;
                }
                const v21 = new f20();
                v21[0];
                v21[0];
            }
            new F14();
            return F6;
        }
        f10(a5, this, f10);
        %OptimizeFunctionOnNextCall(f10);
    }
    const v26 = new F6();
    new F6();
    new F6(v26, a2);
}
const v29 = new F0(F0, F0, F0, F0);
new F0(F0, v29, v29, v29);
